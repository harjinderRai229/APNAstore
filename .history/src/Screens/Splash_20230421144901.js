import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = () => {
  const navigation = useNavigation();
//   useEffect(() => {
//     setTimeout(() => {
//       getData();
//     });
//   }, [5000]);
//   const getData = async () => {
//     const email = await AsyncStorage.getItem('EMAIL');
//     if (email === null || email === '' || email === undefined) {
//       navigation.navigate('Login');
//     } else {
//       navigation.navigate('Home');
//     }
//   };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#00bf63'} barStyle={'dark-content'} />
      <Image
        source={require('../assets/images/playstore.png')}
        style={styles.image}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00bf63',
  },
  image: {
    width: 200,
    height: 200,
  },
});
