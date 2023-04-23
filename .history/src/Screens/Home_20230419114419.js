import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Button from '../component/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Header from '../component/Header';
import { products } from '../utils/Products';
import Card from '../component/Card';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../redux/action/Action';

const Home = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [categoryList, setCategoryList] = useState([]);
  const [tshirtList, setTshirtList] = useState([]);

  useEffect(() => {
    console.log(products);
    let tempCategory = [];
    products.category.map(item => {
      tempCategory.push(item);
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
  const items= useSelector(state)

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
    <ScrollView style={{ flex: 1 }}>
      <View
      // style={
      //   {backgroundColor: '#2569be'}
      //   }
      >
        <Header />
        <Image source={require('../assets/images/a1.png')} style={styles.img} />
        <View style={styles.cont}>
          <FlatList
            data={categoryList}
            horizontal
            renderItem={({ item }) => {
              return (
                <TouchableOpacity style={styles.list}>
                  <Text>{item.category}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <Text style={styles.textStyle}>New T Shirts</Text>
        <View style={{ marginTop: 20 }}>
          <FlatList
            data={tshirtList}
            horizontal
            renderItem={({ item }) => {
              return <Card item={item} onAddToCart={(x)=>{
                dispatch(addItemToCart(item));
              }} />;
            }}
          />
        </View>
        <Text style={styles.textStyle}>New Slippers</Text>
        <View style={{ marginTop: 20 }}>
          <FlatList
            data={tshirtList}
            horizontal
            renderItem={({ item }) => {
              return <Card item={item} />;
            }}
          />
        </View>
        <Text style={styles.textStyle}>Trouser</Text>
        <View style={{ marginTop: 20 }}>
          <FlatList
            data={tshirtList}
            horizontal
            renderItem={({ item }) => {
              return <Card item={item} />;
            }}
          />
        </View>
        <Text style={styles.textStyle}>New Jeans</Text>
        <View style={{ marginTop: 20 }}>
          <FlatList
            data={tshirtList}
            horizontal
            renderItem={({ item }) => {
              return <Card item={item} />;
            }}
          />
        </View>
        <Text style={styles.textStyle}>Sun-Glasses</Text>
        <View style={{ marginTop: 20 }}>
          <FlatList
            data={tshirtList}
            horizontal
            renderItem={({ item }) => {
              return <Card item={item} />;
            }}
          />
        </View>
        <Text style={styles.textStyle}>Shoes</Text>
        <View style={{ marginTop: 20 }}>
          <FlatList
            data={tshirtList}
            horizontal
            renderItem={({ item }) => {
              return <Card item={item} />;
            }}
          />
        </View>
      </View>
    </ScrollView>
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
  list: {
    padding: 10,
    borderWidth: 0.2,
    marginLeft: 20,
    borderRadius: 20,
  },
  cont: {
    marginTop: 20,
  },
  textStyle: {
    marginTop: 20,
    marginLeft: 20,
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
