/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Profile = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          height: 70,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text>Profile</Text>
        <TouchableOpacity
          style={{
            width: 30,
            height: 30,
            marginRight:,
            justifyContent: 'center',
            alignContent: 'center',
            flexDirection: 'row',
          }}>
          <Image
            source={require('../assets/images/settings.png')}
            style={{
              width: 20,
              height: 20,
              // marginLeft: 10, marginRight: 10, marginTop: 10, marginBottom: 10
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
