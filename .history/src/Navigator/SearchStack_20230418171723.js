import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from '../component/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const Sea = () => {
  const navigation = useNavigation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoggedIn = async () => {
      try {
        const value = await AsyncStorage.getItem('USER_ID');
        if (value !== null) {
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.log(error);
      }
    };
    checkLoggedIn();
  }, []);

  const handleLogout = async () => {
    try {
      await AsyncStorage.clear();
      setIsLoggedIn(false);
      navigation.navigate('Login');
    } catch (error) {
      console.log(error);
    }
  };

  const handleNavigateToTabs = () => {
    if (isLoggedIn) {
      navigation.navigate('Tabs');
    } else {
      navigation.navigate('Login');
    }
  };

  return (
    <View>
      <Text>Sea</Text>
      <Button title={'logout'} bgColor={'green'} onPress={handleLogout} />
      <Button
        title={'Navigate to Tabs'}
        bgColor={'blue'}
        onPress={handleNavigateToTabs}
      />
    </View>
  );
};

export default Sea;

const styles = StyleSheet.create({});
