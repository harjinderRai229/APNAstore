import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './HomeStack';
import BottomNavigator from './BottomNavigator';
import Home from '../Screens/Home';

const Drawer = createDrawerNavigator();
export default function DrawerNavigator() {
    return (
        <Drawer.Navigator  screenOptions={{}}>
            <Drawer.Screen name="HomeTab" component={HomeStack} />
        </Drawer.Navigator>
    );
}
