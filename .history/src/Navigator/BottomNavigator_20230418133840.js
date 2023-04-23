import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import ProfileStack from './ProfileStack';
import CartStack from './CartStack';
const Tab = createBottomTabNavigator();
const tabArray = [
  {
    name: 'HomeTab',
    component: HomeStack,
  },
  {
    name: 'ProfileTab',
    component: ProfileStack,
  },
  {
    name: 'CartTab',
    component: CartStack,
  },
];
const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        // tabBarIcon: ({focused, color, size}) => {
        //   let iconName;
        //   if (route.name === 'HomeTab') {
        //     iconName = focused
        //       ? 'home'
        //       : 'home-outline';
        //   } else if (route.name === 'ProfileTab') {
        //     iconName = focused ? 'ios-list' : 'ios-list-outline';
        //   }

        //   // You can return any component that you like here!
        //   return //<Ionicons name={iconName} size={size} color={color} />;
        // },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        
      })}>
      {tabArray.map((item, index) => (
        <Tab.Screen key={index} name={item.name} component={item.component} />
      ))}
    </Tab.Navigator>
  );
}

export default BottomNavigator

const styles = StyleSheet.create({})