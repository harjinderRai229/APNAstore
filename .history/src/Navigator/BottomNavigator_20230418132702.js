import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
const BottomNavigator = () => {
  return (
    <View>
      <Text>BottomNavigator</Text>
    </View>
  )
}

export default BottomNavigator

const styles = StyleSheet.create({})