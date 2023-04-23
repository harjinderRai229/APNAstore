// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import HomeStack from './HomeStack';
// import ProfileStack from './ProfileStack';
// import CartStack from './CartStack';
// import WishListStack from './WishListStack';
// import SearchStack from './SearchStack';
// const Tab = createBottomTabNavigator();
// const tabArray = [
//   {
//     name: 'HomeTab',
//     component: HomeStack,
//   },
//   {
//     name: 'SearchTab',
//     component: SearchStack,
//   },
//   {
//     name: 'CartTab',
//     component: CartStack,
//   },
//   {
//     name: 'WishListTab',
//     component: WishListStack,
//   },
//   {
//     name: 'ProfileTab',
//     component: ProfileStack,
//   },
// ];
// const BottomNavigator = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={() => ({
//         headerShown: false,
//         // tabBarIcon: ({focused, color, size}) => {
//         //   let iconName;
//         //   if (route.name === 'HomeTab') {
//         //     iconName = focused
//         //       ? 'home'
//         //       : 'home-outline';
//         //   } else if (route.name === 'ProfileTab') {
//         //     iconName = focused ? 'ios-list' : 'ios-list-outline';
//         //   }

//         //   // You can return any component that you like here!
//         //   return //<Ionicons name={iconName} size={size} color={color} />;
//         // },
//         tabBarActiveTintColor: 'tomato',
//         tabBarInactiveTintColor: 'gray',
//       })}>
//       {tabArray.map((item, index) => (
//         <Tab.Screen key={index} name={item.name} component={item.component} />
//       ))}
//     </Tab.Navigator>
//   );
// };

// export default BottomNavigator;


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
    image: require('../assets/images/home.png'),
  },
  {
    name: 'CartTab',
    component: CartStack,
    image: require('../assets/images/home.png'),
  },
  {
    name: 'WishListTab',
    component: WishListStack,
    image: require('../assets/images/home.png'),
  },
  {
    name: 'ProfileTab',
    component: ProfileStack,
    image: require('../assets/images/home.png'),
  },
];

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          const tab = tabArray.find((tab) => tab.name === route.name);
          return (
            <Image
              source={tab.image}
              style={[
                styles.tabIcon,
                { tintColor: focused ? 'tomato' : 'gray' },
              ]}
            />
          );
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
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
