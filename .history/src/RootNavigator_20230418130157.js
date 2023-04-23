import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RootNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {!isAuthenticated ? (
            <Stack.Screen name="Auth" component={AuthNavigator} />
          ) : (
            <Stack.Screen name="BottomNavigator" component={Bottom} />
          )}
        </Stack.Navigator>
      );
    };

export default RootNavigator

const styles = StyleSheet.create({})