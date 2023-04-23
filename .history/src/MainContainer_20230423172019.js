import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './RootNavigator';

const MainContainer = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default MainContainer;

const styles = StyleSheet.create({
  text: {
    color: (isDarkMode ? 'white' : 'black',
  },
});
