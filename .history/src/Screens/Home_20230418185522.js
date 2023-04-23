import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button from '../component/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Header from '../component/Header';
import { products } from '../utils/Products';

const Home = () => {
  const navigation = useNavigation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [categoryList, setCategoryList] = useState([]);
  const [tshirtList, setTshirtList] = useState([]);

  useEffect(() => {
    console.log(products);
    let tempCategory = []
    products.category.map(item => {
      tempCategory.push(item)
    });
    setCategoryList(tempCategory);
    setTshirtList(products.category[0].data);
    // setCategoryList(products.map(product => product.category));
    // setTshirtList(products.map(product => product.tshirt));
  }, []);
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
      <View>
        <FlatList
          data={categoryList}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity>
              <Text></Text>
              </TouchableOpacity>
            )
          }}
        />
      </View>

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
  list:{
    padding:10 ,
    borderWidth:0.2,
    marginLeft:20,
    borderRadius:20,
  },
  cont:{
    marginTop:20
  },
});
