import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WishList from '../Screens/Cart';
const Stack = createNativeStackNavigator();
const WishListStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="WishList">
      <Stack.Screen name="WishList" component={WishList} />
    </Stack.Navigator>
  );
};

export default WishListStack;

const styles = StyleSheet.create({});
