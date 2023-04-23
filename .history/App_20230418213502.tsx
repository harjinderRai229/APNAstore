import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppNavigator from './src/Navigator/AuthNavigator'
import RootNavigator from './src/RootNavigator'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import MainContainer from './src/MainContainer'
import store from './src/redux/store/Store'

const App = () => {
  return (
    <Provider store={store}>
      <MainContainer/>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})