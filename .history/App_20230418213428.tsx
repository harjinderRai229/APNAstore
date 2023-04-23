import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppNavigator from './src/Navigator/AuthNavigator'
import RootNavigator from './src/RootNavigator'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import MainContainer from './src/MainContainer'

const App = () => {
  return (
    <Provider>
      <MainContainer/>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})