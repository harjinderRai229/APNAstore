import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthNavigator from './Navigator/AuthNavigator';
import DrawerNavigator from './Navigator/DrawerNavigator';
import BottomNavigator from './Navigator/BottomNavigator';

const RootNavigator = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    AsyncStorage.getItem('TOKEN').then((token) => {
      if (token) {
          setIsAuthenticated(true);
      }
    });
  }, []);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {!isAuthenticated ? (
        <Stack.Screen name="Auth" component={AuthNavigator} />
      ) : (
        <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
