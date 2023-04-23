import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
const Tab = createBottomTabNavigator();
const tabArray = [
  {
    name: 'HomeTab',
    component: HomeStack,
  },
  {
    name: 'ProfileTab',
    component: ProfileStack,
  },
];
const BottomNavigator = () => {
  return (
    <View>
      <Text>BottomNavigator</Text>
    </View>
  )
}

export default BottomNavigator

const styles = StyleSheet.create({})