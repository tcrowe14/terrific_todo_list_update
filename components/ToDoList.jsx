import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function ToDoList({ tasks }) {
  return (
    <View style={styles.completed}>
      {tasks.map((task, index) => (
        <View style={styles.task} key={index}>
          <Text style={styles.taskText}>{task}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
    width: 275,
    borderRadius: 5,
    marginTop: 10,
  },
  taskText: {
    fontSize: 16,
    color: '#333',
  },
});
