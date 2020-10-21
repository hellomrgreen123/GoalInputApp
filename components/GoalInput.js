import React, { useState } from 'react'
import { View, TextInput, Button ,StyleSheet, Modal, ImagePropTypes} from 'react-native';

const GoalInput = (props) => {
    const [enteredGoal, setEnteredGoal] = useState('')
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText)
    }
    const addGoalHandler=()=>{
    
        props.onAddGoal(enteredGoal)
        setEnteredGoal('')
    }
    return (<Modal visible={props.modal} animationType="slide">
        <View style={styles.input}>
            <TextInput placeholder="Input Course Goal" style={styles.inputContainer} 
            onChangeText={goalInputHandler} 
            value={enteredGoal}/>
            <View style={styles.buttonContainer}>
           <View style={styles.button}>
               <Button title="CANCEL"color="red" onPress={props.onCancel}/>
               </View>
            <View style={styles.button}>
                <Button title="ADD" onPress={addGoalHandler} />
                </View>
            </View>
        </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    inputContainer: {
        width: '80%', borderBottomColor: 'black', borderBottomWidth: 1, padding: 10,marginBottom:10
    },
    input: {
        justifyContent: 'center', alignItems: 'center',flex:1
    },
    buttonContainer:{
        
        width:'50%', flexDirection:'row', justifyContent:'space-between'
    },
    button:{
        width:'40%'

    }


});


export default GoalInput
