import { Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import CustomTextInput from '../component/CustomTextInput'

const Login = () => {
    return (
        <ScrollView style={styles.container}>
            <Image source={require('../assets/images/playstore.png')} style={styles.img} />
            <Text style={styles.text}>
                Login
            </Text>
            {/* <TextInput placeholder='Email' style={styles.inputtext} />
            <TextInput placeholder='Password' secureTextEntry style={styles.inputtext} /> */}
            <CustomTextInput placeholder={"Email"} icon={require()}/>
            <CustomTextInput placeholder={"Password"} type={true}/>
        </ScrollView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    img: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginTop: 100,
        borderRadius: 100
    },
    text: {
        marginTop: 50,
        alignSelf: 'center',
        fontSize: 25,
        color: '#000',
        textAlign: 'center',
        fontWeight: '700',
    },
    inputtext: {
        alignSelf: 'center',
        width: "85%",
        height: 58,
        borderRadius: 10,
        borderWidth: 0.5,
        marginTop: 40
    }
})