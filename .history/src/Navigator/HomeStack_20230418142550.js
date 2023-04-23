import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home';
const Stack = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Screen name='Home' component={Bo} />
  )
}

export default HomeStack

const styles = StyleSheet.create({})