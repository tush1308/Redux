import { SET_COUNT } from "./actions";

const initialState={
    count:0,
}

function userReducer(state=initialState,action){
    switch(action.type){
        case SET_COUNT:
            return {...state,count:action.payload};
        default:
            return state;
    }
}

export default userReducer;