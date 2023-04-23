import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../component/Button'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import { CommonActions } from '@react-navigation/native';

const Home = () => {
const navigation=useNavigation();
  const handleLogout = async () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      })
    );
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