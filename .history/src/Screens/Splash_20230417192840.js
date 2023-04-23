import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const Splash = () => {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            const checkSession = async () => {
      const email = await AsyncStorage.getItem('EMAIL');
      const password = await AsyncStorage.getItem('PASSWORD');
      if (email && password) {
        navigation.navigate('Home');
      } else {
        navigation.navigate('Login');
      }
    };
    checkSession();
        })
    }, [5000])
    return (
        <View style={styles.container}>
        <StatusBar backgroundColor={"#00bf63"} barStyle={'dark-content'}/>
            <Image source={require ('../assets/images/playstore.png')} style={styles.image}/>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#00bf63',
    },
    image:{
        width: 200,
        height: 200,
    },
})