/* eslint-disable react-native/no-inline-styles */
import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Profile = () => {
    return (
        <View style={{ flex: 1 }}>
            <View
                style={{
                    width: '100%',
                    height: 70,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'row',
                }}>
                <Text style={{ color: '#000', fontWeight:'600',fontSize:18, marginLeft:15 }}>Profile</Text>
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
                            // marginLeft: 10, marginRight: 10, marginTop: 10, marginBottom: 10
                        }}
                    />
                </TouchableOpacity>
            </View>
            <Image
                source={require('../assets/images/profile.png')}
                style={{
                    width: 100,
                    height: 100,
                    alignItems:'center',
                    marginTop: 50,
                }};
            />
        </View>
    );
};

export default Profile;

const styles = StyleSheet.create({});
