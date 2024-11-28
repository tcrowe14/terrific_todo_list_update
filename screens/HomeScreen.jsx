import { View, StyleSheet, SafeAreaView, Text, StatusBar, Pressable } from 'react-native';
import React, { useState } from 'react';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import MainLayout from '../layouts/MainLayout.jsx';

function HomeScreen({ navigation }) {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
    'Eat pizza',
  ]);

  const addTask = (taskText) => {
    const trimmedTask = taskText.trim();
    if (!trimmedTask) {
      alert('Task cannot be empty.');
      return;
    }
    if (!tasks.includes(trimmedTask)) {
      setTasks([...tasks, trimmedTask]);
    } else {
      alert('Task already exists');
    }
  };

  return (
    <MainLayout>
      <SafeAreaView style={styles.container}>
        <Text style={styles.textHead}>Terrific To-Do List</Text>
        <View style={styles.container}>
          <View style={styles.main}>
            <ToDoList tasks={tasks} />
            <ToDoForm addTask={addTask} />
            <StatusBar style="auto" />
          </View>
        </View>
            <View>
                <Pressable style={styles.button} onPress={() => navigation.navigate('About')}>
                    <Text style={styles.buttonText}>Go to About</Text>
                </Pressable>
          </View>
      </SafeAreaView>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  main: {
    flex: 1,
    alignItems: 'center',
  },
  textHead: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default HomeScreen;
