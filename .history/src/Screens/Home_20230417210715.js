import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../component/Button'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
      <Button title={"logout"} bgColor={"green"} onPress={()=>{
        const logout = await AsyncStorage.
      }}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})