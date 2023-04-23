import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppNavigator from './Navigator/AuthNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const RootNavigator = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
 
    const Stack = createNativeStackNavigator(); 
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {!isAuthenticated ? (
                <Stack.Screen name="Auth" component={AppNavigator} />
            ) : (
                {/* <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} /> */}
            )}
        </Stack.Navigator>
    );
};

export default RootNavigator

const styles = StyleSheet.create({})