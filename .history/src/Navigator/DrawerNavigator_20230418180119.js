/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeStack from './HomeStack';
import BottomNavigator from './BottomNavigator';
import Home from '../Screens/Home';
import CustomDrawerContent from './CustomDrawer';

const Drawer = createDrawerNavigator();
export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="BottomNavigator" component={BottomNavigator} />
      <Drawer.Screen name="Home" component={HomS} />
    </Drawer.Navigator>
  );
}
