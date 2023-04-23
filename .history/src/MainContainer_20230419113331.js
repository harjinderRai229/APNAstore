/* eslint-disable react/jsx-no-undef */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

const MainContainer = () => {
  return (
    <NavigationContainer>
      <RootNavigator/>
    </NavigationContainer>
  );
};

export default MainContainer;

const styles = StyleSheet.create({});
