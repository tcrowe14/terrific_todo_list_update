/**
 * My To Do List App
 *
 * @format
 */

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, TextInput, Pressable, Text, Alert } from 'react-native';

function ToDoForm({ addTask }) {
  const [taskText, setTaskText] = useState('');

  const handleAddTask = () => {
    if (taskText.trim() === '') {
      Alert.alert('Validation Error', 'Task cannot be empty.');
      return;
    }
    addTask(taskText.trim());
    setTaskText('');
  };

  return (
    <SafeAreaView>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
          onChangeText={setTaskText}
          value={taskText}
          maxLength={100} // Optional: Limit task length
        />
        <Pressable onPress={handleAddTask} style={styles.button}>
          <Text style={styles.buttonText}>Add Task</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
    borderRadius: 5, // Optional: Makes input look better
    fontSize: 16,
  },
  button: {
    backgroundColor: '#99c5e8',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ToDoForm;
