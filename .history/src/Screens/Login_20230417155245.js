import { Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import CustomTextInput from '../component/CustomTextInput'

const Login = () => {
    return (
        <ScrollView style={styles.container}>
            <Image source={require('../assets/images/a2.png')} style={styles.img} />
            <Text style={styles.text}>
                Login
            </Text>
            <CustomTextInput placeholder={"Email"} icon={require('../assets/images/email.png')} />
            <CustomTextInput placeholder={"Password"} type={true} icon={require('../assets/images/lock.png')} />
        </ScrollView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2596be',
    },
    img: {
        width: 140,
        height: 140,
        alignSelf: 'center',
        marginTop: 100,
        borderRadius: 100
    },
    text: {
        marginTop: 40,
        alignSelf: 'center',
        fontSize: 25,
        color: '#000',
        textAlign: 'center',
        fontWeight: '700',
    },
    placeholderTextColor:{
        
    },
})