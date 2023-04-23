import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import ProfileStack from './ProfileStack';
import CartStack from './CartStack';
import WishListStack from './WishListStack';
import SearchStack from './SearchStack';

const Tab = createBottomTabNavigator();

const tabArray = [
  {
    name: 'HomeTab',
    component: HomeStack,
    image: require('../assets/images/home.png'),
  },
  {
    name: 'SearchTab',
    component: SearchStack,
    image: require('../assets/images/search.png'),
  },
  {
    name: 'CartTab',
    component: CartStack,
    image: require('../assets/images/shopping-bag.png'),
    style: {
      backgroundColor: 'black',
    },
  },
  {
    name: 'WishListTab',
    component: WishListStack,
    image: require('../assets/images/heart.png'),
  },
  {
    name: 'ProfileTab',
    component: ProfileStack,
    image: require('../assets/images/user.png'),
  },
];

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          const tab = tabArray.find(tab => tab.name === route.name);
          return (
            <Image
              source={tab.image}
              style={[styles.tabIcon, { tintColor: focused ? 'tomato' : 'gray' }]}
            />
          );
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: tabArray.find(tab => tab.name === route.name)?.style?.backgroundColor,
        },
      })}
    >
      {tabArray.map((item, index) => (
        <Tab.Screen key={index} name={item.name} component={item.component} />
      ))}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabIcon: {
    width: 24,
    height: 24,
  },
});

export default BottomNavigator;
