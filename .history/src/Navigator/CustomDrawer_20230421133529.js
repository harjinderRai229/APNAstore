import React from 'react';
import { Linking, StyleSheet } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useDispatch } from 'react-redux';
// import { logOut } from '../redux/slice/userSlice';
// import { storage } from '../utils';

export default function CustomDrawerContent({ props, }) {
  //   const dispatch = useDispatch();
  const 
  const handleLogout = async () => {
    try {
      await AsyncStorage.clear();
      // setIsLoggedIn(false);
      navigation.navigate('Login');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        style={styles.drawerItem}
        label="Help"
        onPress={() => Linking.openURL('https://youtube.com')}
      />
      <DrawerItem
        style={[styles.drawerItem, { backgroundColor: 'green' }]}
        label="LogOut"
        labelStyle={styles.drawerItemLabel}
        onPress={handleLogout}
      />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerItem: {
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 5,
    elevation: 5,
    borderWidth: 2,
  },
  drawerItemLabel: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
