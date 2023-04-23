import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigator from './Navigator/AuthNavigator';

const RootNavigator = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false); 
    const Stack = createNativeStackNavigator(); 
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {!isAuthenticated ? (
                <Stack.Screen name="Auth" component={AuthNavigator} />
            ) : (
                {/* <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} /> */}
            )}
        </Stack.Navigator>
    );
};

export default RootNavigator

const styles = StyleSheet.create({})