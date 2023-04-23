import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const HomeStack = () => {
  return (
   <Stack.Screen/>
  )
}

export default HomeStack

const styles = StyleSheet.create({})