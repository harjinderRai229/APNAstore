import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigatorStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Splash from './Screens/Splash';
const Stack = createNativeStackNavigatorStackNavigator();
const AppNavigator = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} />
        </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator

const styles = StyleSheet.create({})