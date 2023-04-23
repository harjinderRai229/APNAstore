import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <View>
      <Text>AppNavigator</Text>
    </View>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})