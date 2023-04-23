import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({name}) => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          height: 70,
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Text
          style={{
            color: '#000',
            fontWeight: '600',
            fontSize: 18,
            marginLeft: 15,
          }}>
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
      <View style={{alignItems: 'center', marginTop: 30}}>
        <Image
          source={require('../assets/images/profile.png')}
          style={{
            width: 80,
            height: 80,
            alignSelf: 'center',
            marginBottom: 10,
          }}
        />
        <Text style={{fontWeight: '600', fontSize: 18}}>{name}</Text>
        <Profile name={n}
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
