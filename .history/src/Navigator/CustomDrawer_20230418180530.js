import React from 'react';
import {Linking, StyleSheet} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
// import { useDispatch } from 'react-redux';
// import { logOut } from '../redux/slice/userSlice';
// import { storage } from '../utils';

export default function CustomDrawerContent({props, navigation}) {
  //   const dispatch = useDispatch();
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        style={styles.drawerItem}
        label="Help"
        onPress={() => Linking.openURL('https://youtube.com')}
      />
      <DrawerItem
        style={[styles.drawerItem, {backgroundColor: 'green'}]}
        label="LogOut"
        labelStyle={styles.drawerItemLabel}
        // onPress={() => {
        //   dispatch(logOut());
        //   storage.delete('userInfo');
        // }}
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
