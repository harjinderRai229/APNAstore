import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import ProfileStack from './ProfileStack';
import CartStack from './CartStack';
import WishListStack from './WishListStack';
import SearchStack from './SearchStack';
import { useSelector } from 'react-redux';

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
  const data = useSelector(state => state);

  const shouldShowTabBar = (route) => {
    const routeName = route.state
      ? route.state.routes[route.state.index].name
      : route.params?.screen || 'HomeTab';
    return routeName !== 'ProfileTab';
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        // tabBarLabel: null,
        tabBarIcon: ({ focused }) => {
          const tab = tabArray.find(tab => tab.name === route.name);
          const tintColor = focused ? 'tomato' : 'gray';
          const backgroundColor = route.name === 'CartTab' ? 'black' : 'white';
          return (
            <View style={[styles.tabIconWrapper, { backgroundColor }]}>
              <Image source={tab.image} style={[styles.tabIcon, { tintColor }]} />
              {tab.name === 'CartTab' && (
                <View style={styles.circle}>
                  <Text
                    style={{ color: '#fff', fontWeight: '700', fontSize: 12 }}>
                    {data.Reducers.length}
                  </Text>
                </View>
              )}
              {tab.name === 'WishListTab' && (
                <View
                  style={[
                    styles.circle,
                    { height: 18, width: 18, borderRadius: 9 },
                  ]}>
                  <Text style={{ color: '#fff', fontWeight: '700' }}>
                    {data.Reducers2.length}

                  </Text>
                </View>
              )}
            </View>
          );
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: {
          display: 'none',
        },
      })}>
      {tabArray.map((item, index) => (
        <Tab.Screen key={index} name={item.name} component={item.component} />
      ))}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabIconWrapper: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabIcon: {
    width: 25,
    height: 25,
  },
  circle: {
    position: 'absolute',
    top: 1,
    right: 2,
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BottomNavigator;
