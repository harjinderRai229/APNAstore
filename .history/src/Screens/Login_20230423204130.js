// import React, { useState } from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
} from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../component/Button';
import CustomTextInput from '../component/CustomTextInput';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const validateEmail = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validate = () => {
    if (!email) {
      Alert.alert('Email Required', 'Please enter your email address');
    } else if (!validateEmail(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address');
    } else if (!password) {
      Alert.alert('Password Required', 'Please enter your password');
    } else {
      setLoading(true);
      getData();
    }
  };

  const getData = async () => {
    const { EMAIL, PASSWORD, TOKEN } = await AsyncStorage.multiGet([
      'EMAIL',
      'PASSWORD',
      'TOKEN',
    ]);
    if (email === EMAIL && password === PASSWORD) {
      navigation.navigate('BottomNavigator');
      setEmail('');
      setPassword('');
    } else if (email !== EMAIL && password !== PASSWORD) {
      Alert.alert('Invalid Email and Password', 'Please try again');
    } else if (email !== EMAIL) {
      Alert.alert('Invalid Email', 'Please try again');
    } else if (password !== PASSWORD) {
      Alert.alert('Invalid Password', 'Please try again');
    }
    setLoading(false);
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor={'#2596be'} />
      <Image source={} style={styles.img} />
      <Text style={styles.text}>Login</Text>
      <CustomTextInput
        placeholder={'Email'}
        value={email}
        onChangeText={setEmail}
        icon={require('../assets/images/email.png')}
        placeholderTextColor={'red'}
      />
      <CustomTextInput
        placeholder={'Password'}
        value={password}
        onChangeText={setPassword}
        type={'password'}
        icon={require('../assets/images/lock.png')}
        placeholderTextColor={'red'}
      />
      <Button
        title={'Login'}
        bgColor={'#000'}
        textColor={'#fff'}
        onPress={validate}
        disabled={loading}
      />
      {loading && <ActivityIndicator style={{ marginTop: 10 }} />}
      <Text
        style={[
          styles.text,
          {
            fontSize: 18,
            marginTop: 20,
            textDecorationLine: 'underline',
          },
        ]}
        onPress={() => {
          navigation.navigate('SignUp');
        }}>
        Create New Account ?
      </Text>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2596be',
  },
  img: {
    width: 140,
    height: 140,
    alignSelf: 'center',
    marginTop: 60,
    borderRadius: 100,
  },
  text: {
    marginTop: 30,
    alignSelf: 'center',
    fontSize: 25,
    color: '#000',
    textAlign: 'center',
    fontWeight: '800',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
    marginLeft: 40,
    fontWeight: '800',
  },
});
