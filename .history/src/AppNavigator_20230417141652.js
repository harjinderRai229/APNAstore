import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNaStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Splash from './Screens/Splash';
const Stack = createNaStackNavigator();
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