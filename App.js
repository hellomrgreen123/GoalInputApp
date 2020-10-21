import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, Button,FlatList,Touchable } from 'react-native';

import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput';
export default function App() {

  const [goalList,setGoalList]= useState([])
  const [ modal,setModal]=useState('false')

  const addGoalHandler=enteredGoal=>{
    if (enteredGoal.length ===0){
      return
    }
    setGoalList(goalList=>[...goalList,{key: Math.random().toString(),value:enteredGoal}])
  modalHandler()
  }
  const deleteGoalHandler=goalKey=>{
    setGoalList(goalList=>{
      return goalList.filter((goal)=>
        goal.key !== goalKey
      )
    })

  }
  const modalHandler=()=>{
    setModal(!modal)
    console.log(modal)

  }
  
  return (<>
    <View style={styles.screen}>
    <Button title="Add Goal" onPress={modalHandler}></Button>
    <GoalInput onAddGoal={addGoalHandler} modal={modal} onCancel={modalHandler}/>
<View>
  <FlatList 
  keyExtractor={(item,index)=>item.key}
  data={goalList} renderItem={itemData=>(<GoalItem modal={modal}onDelete={deleteGoalHandler}title={itemData.item.value} id={itemData.item.key}/>)}/>
</View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    width: '80%', borderBottomColor: 'black', borderBottomWidth: 1, padding: 10
  },
  input:{
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' 
  },

});

