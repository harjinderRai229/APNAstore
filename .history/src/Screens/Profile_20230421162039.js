/* eslint-disable react-native/no-inline-styles */
import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const navigation =useNavigation();
  const [name, setName] = useState('');

  useEffect(() => {
    const getName = async () => {
      try {
        const value = await AsyncStorage.getItem('NAME');
        if (value !== null) {
          setName(value);
        }
      } catch (e) {
        // error reading value
      }
    };

    getName();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Profile</Text>
        <TouchableOpacity style={styles.btn}>
          <Image
            source={require('../assets/images/settings.png')}
            style={{
              width: 20,
              height: 20,
            }}
          />
        </TouchableOpacity>
      </View>
      {/* <View style={{ alignItems: 'center', marginTop: 30 }}> */}
      <Image
        source={require('../assets/images/profile.png')}
        style={styles.image}
      />
      <Text style={{ fontSize: 18, marginTop: 20, alignSelf: 'center' }}>
        {name}
      </Text>
      <TouchableOpacity
        style={styles.line}
        onPress={()}
        >
        <Text>My Address</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.line}>
        <Text>My Orders</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.line}>
        <Text>My Offers</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 70,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerText: {
    color: '#000',
    fontWeight: '600',
    fontSize: 18,
    marginLeft: 15,
  },
  btn: {
    width: 30,
    height: 30,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 30,
  },
  line: {
    borderBottomWidth: .3,
    borderBottomColor: '#8e8e8e',
    marginTop: 20,
    width: '90%',
    height:50,
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
});
