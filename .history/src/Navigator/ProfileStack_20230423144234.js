import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '../Screens/Profile';
import MyAddress from '../Screens/MyAddress';
import AddAddress from '../Screens/AddAddress';
const Stack = createNativeStackNavigator();
const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      // initialRouteName="Profile"
      >
      {/* <Stack.Screen name="Profile" component={Profile} /> */}
      <Stack.Screen name="AddAddress" component={Add} />
      <Stack.Screen name="MyAddress" component={MyAddress} />
      <Stack.Screen name="AddAddress" component={AddAddress} />
    </Stack.Navigator>
  );
};

export default ProfileStack;

const styles = StyleSheet.create({});
