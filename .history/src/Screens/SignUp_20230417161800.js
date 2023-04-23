import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomTextInput from '../component/CustomTextInput'
import CommonButton from '../component/CommonButton'

const SignUp = () => {
    return (
        <ScrollView style={styles.container}>
            <Image source={require('../assets/images/a2.png')} style={styles.img} />
            <Text style={styles.text}>
                Login
            </Text>
            <CustomTextInput placeholder={"Email"} icon={require('../assets/images/email.png')} />
            <CustomTextInput placeholder={"Password"} type={"password"} icon={require('../assets/images/lock.png')} />
            <CommonButton title={'Login'} bgcolor={"#000"} onPress={() => { }} textColor={"#fff"} />
            <Text style={
                [
                    styles.text,
                    {
                        fontSize: 18,
                        marginTop: 20,
                        textDecorationLine: 'underline'
                    }
                ]
            }
                onPress={() => {
                    navigation.navigate("SignUp")
                }}>Create New Account ?
            </Text>
        </ScrollView>
    )
}

export default SignUp

const styles = StyleSheet.create({})