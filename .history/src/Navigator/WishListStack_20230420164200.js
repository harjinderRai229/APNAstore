import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import Cart from '../Screens/Cart';
const Stack = createNativeStackNavigator();
const WishListStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Cart">
      <Stack.Screen name="Cart" component={WishList} />
    </Stack.Navigator>
  );
};

export default WishListStack;

const styles = StyleSheet.create({});
