export const SET_COUNT="SET_COUNT";

export const setCount= count => dispatch =>{
    dispatch({
        type: SET_COUNT,
        payload:count,
    });
}