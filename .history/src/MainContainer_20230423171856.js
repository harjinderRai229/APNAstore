import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './RootNavigator';

const MainContainer = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Listen for system preference change and update state accordingly
  useEffect(() => {
    setIsDarkMode(useColorScheme() === 'dark');
  }, []);

  return (
    <NavigationContainer>
      <RootNavigator />
      <View style={isDarkMode ? styles.darkOverlay : null} />
    </NavigationContainer>
  );
};

export default MainContainer;

const styles = StyleSheet.create({
  darkOverlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  text: {
    color: isDarkMode ? '#fff' : '#000',
  },
});
