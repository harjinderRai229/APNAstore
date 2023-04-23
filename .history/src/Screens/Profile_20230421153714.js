/* eslint-disable react-native/no-inline-styles */
import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = () => {
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
      <View
        style={styles.header}>
        <Text
          style={styles.}>
          Profile
        </Text>
        <TouchableOpacity
          style={{
            width: 30,
            height: 30,
            marginRight: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../assets/images/settings.png')}
            style={{
              width: 20,
              height: 20,
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: 'center', marginTop: 30 }}>
        <Image
          source={require('../assets/images/profile.png')}
          style={{
            width: 80,
            height: 80,
            alignSelf: 'center',
            marginBottom: 10,
          }}
        />
        <Text style={{ fontSize: 18 }}>{name}</Text>
      </View>
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
});
