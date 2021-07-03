
import { func } from 'prop-types';
import React from 'react';
import { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, TouchableOpacityBase, View } from 'react-native';

import { TaskItem } from './components /TaskItem';

type TaskList = string[];

type Task = string;



export default function App() {

  const [newTask , setNewTask ] = useState<Task>('');
  const [taskList, setTaskList] = useState<TaskList>([])

  function handleCreateTask() {
    Keyboard.dismiss()
    if (newTask.trim() === '') {
      console.log('digite algo ')
      return
    };
    
    setTaskList(taskList.concat(newTask.trim()));
    
    setNewTask('')
    
    

    


  }

  return (
    <View style={styles.container}>
      
      <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>  Today's taks</Text>

          <View style={styles.items}>
              { taskList.map( task => {
                return (
                  <TaskItem text={task}/>
                )
                
              })}

              
          </View>
      </View>

     <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
     >
       <TextInput
          style={styles.input}
          placeholder={'Write a task here'}
          onChangeText={task => setNewTask(task)}
          value={newTask}
          
          
       
       />

       <TouchableOpacity onPress={handleCreateTask}>
         <View style={styles.addWrapper}>
            <Text style={styles.addBtn}>+</Text>
         </View>
       </TouchableOpacity>
     </KeyboardAvoidingView>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    
  },

  tasksWrapper: {
    padding: 80,
    paddingHorizontal: 20,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  items: {
    marginTop: 30,
    
  },

  writeTaskWrapper: {
      
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      position: 'absolute',
      bottom: 30,
      width: '100%',
      
      
  },
  input: {
    padding: 15,
    width: 250,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#c0c0c0',
    borderWidth: 1,

    
  },

  addWrapper: {
   width: 60,
   height: 60,
   backgroundColor: '#fff',
   borderRadius: 60,
   justifyContent: 'center',
   alignItems: 'center',
   fontSize: 16,
   borderColor: '#c0c0c0',
   borderWidth: 1,
  },

  addBtn: {
   
  }

  
});
