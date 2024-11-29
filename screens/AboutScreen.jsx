import { View, Text, StyleSheet, Pressable } from 'react-native';
import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout.jsx';

const AboutScreen = () => {
  const [bgColor, setBgColor] = useState('white'); // Initial background color
  const [txColor, setTxColor] = useState('black'); // Initial text color

  const handlePress = () => {
    setBgColor('black');
    setTxColor('white');
    setTimeout(() => {
      setBgColor('red');
      setTxColor('blue');
      setTimeout(() => {
        setBgColor('white');
        setTxColor('black');
      }, 100);
    }, 100);
  };

  const date = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <MainLayout>
      <View style={[styles.container, { backgroundColor: bgColor }]}>
        <Text style={[styles.textHead, { color: txColor }]}>Terrific To-Do List</Text>
        <Text style={[styles.textBody, { color: txColor }]}>Version 2.010</Text>

        <View style={styles.row}>

          <Text style={[styles.textBody, { color: txColor }]}>Created by:</Text>
          <Pressable onPress={handlePress}>
            <Text style={[styles.textBody]}> Taylor Crowe</Text>
          </Pressable>
        </View>

        <Text style={[styles.textDate, { color: txColor }]}>Today's date:</Text>
        <Text style={[styles.textDate, { color: txColor }]}>{date}</Text>
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  textHead: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  textBody: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  textDate: {
    fontSize: 18,
    textAlign: 'left',
    marginBottom: 10,
    marginLeft: 85,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AboutScreen;
