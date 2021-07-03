
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { TaskItem } from './components /TaskItem';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>  Today's taks</Text>

          <View style={styles.items}>
              {/* taksks */}

              <TaskItem text={'teste 2 '}/>
          </View>
      </View>


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
    
  }

  
});
