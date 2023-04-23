import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppNavigator from './src/Navigator/AuthNavigator'

const App = () => {
  return (
    <NavigationContainer>
    <RootNavigator />
  </NavigationContainer>  <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})