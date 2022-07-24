import React from 'react';
import {StyleSheet,Text, View} from 'react-native';
import { Provider } from 'react-redux';
import { Store } from './src/redux/store';
import { useSelector,useDispatch } from 'react-redux';
import { setCount } from './src/redux/actions';
import Entypo from 'react-native-vector-icons/Entypo';

const App1=()=>{
const {count}=useSelector(state=>state.userReducer);
const dispatch=useDispatch();

  return (
      <View style={styles.container}>
      <Entypo 
        name="plus"
        size={42}
        style={styles.button}
        color="black"
        onPress={()=>{dispatch(setCount(count+1))}}
      />
      <Text style={{fontSize:32}}>{count}</Text>
      <Entypo 
        name="minus"
        size={42}
        style={styles.button}
        color="black"
        onPress={()=>{dispatch(setCount(count-1))}}
      />
      </View>
  );
};
const App=()=>{
  return(
    <Provider store={Store}>
      <App1/>
    </Provider>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'white',
  },
  button:{
    backgroundColor:'grey',
    borderRadius:5,
    padding:2,
  }
});

export default App;
