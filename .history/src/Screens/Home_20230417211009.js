import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../component/Button'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Home = () => {

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('userData');
      // navigate to login screen or do any other necessary actions
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Text>Home</Text>
      <Button title={"logout"} bgColor={"green"} onPress={handleLogout}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})