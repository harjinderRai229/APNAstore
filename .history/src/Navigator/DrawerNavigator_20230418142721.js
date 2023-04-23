import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './HomeStack';
import BottomNavigator from './BottomNavigator';

const Drawer = createDrawerNavigator();
export default function DrawerNavigator() {
    return (
        <Drawer.Navigator >
            <Drawer.Screen name="Home" component={HomeStack} />
            <Drawer.Screen name="BottomNavigator" component={BottomNavigator} />
        </Drawer.Navigator>
    );
}
