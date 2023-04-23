import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Button from '../component/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Header from '../component/Header';
import { products } from '../utils/Products';

const Home = () => {
  const navigation = useNavigation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [categoryList ,setCategoryList] = useState ([]),
  const [ts ,setts] = useState ([]),

// useEffect(() => {
//   console.log(products);
// }, [])
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
      <Header />
      <Image source={require('../assets/images/a1.png')} style={styles.img} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  img: {
    width: '90%',
    height: 200,
    borderRadius: 10,
    marginHorizontal: 15,
    alignSelf: 'center',
    marginTop: 10,
  },
});
