import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MainLayout from '../layouts/MainLayout.jsx'

const AboutScreen = () => {
  return (
    <MainLayout>
      <View>
        <Text style={styles.textHead}>Terrific To-Do List</Text>
        <Text style={styles.textBody}>Version 2.010</Text>
        <Text style={styles.textBody}>Created by: Taylor Crowe</Text>
        <Text style={styles.textBody}>November 27, 2024</Text>
      </View>
    </MainLayout>
  )
}

const styles = StyleSheet.create({
  textHead: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  textBody: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },

});

export default AboutScreen