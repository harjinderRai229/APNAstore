import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../component/Button'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
const navigation=useNavigation();
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('userData');
      // navigate to login screen or do any other necessary actions
      navigation.navigate("Login");
      
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