import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const Splash = () => {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            // navigation.navigate("Login")
        })
    }, [3000])
    return (
        <View style={styles.container}>
        <StatusBar backgroundColor={"#00bf63"} barStyle={}/>
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