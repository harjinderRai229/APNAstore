import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomTextInput from '../component/CustomTextInput'
import CommonButton from '../component/CommonButton'
import { useNavigation } from '@react-navigation/native'

const SignUp = () => {
    const navigation = useNavigation();
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator=>
            <Image source={require('../assets/images/a2.png')} style={styles.img} />
            <Text style={styles.text}>
                Create New Account
            </Text>
            <CustomTextInput placeholder={"Enter Your Name"} icon={require('../assets/images/user.png')} />
            <CustomTextInput placeholder={"Enter Your Email"} icon={require('../assets/images/email.png')} />
            <CustomTextInput placeholder={"Enter Your Number"} icon={require('../assets/images/phone.png')} />
            <CustomTextInput placeholder={"Password"} type={"password"} icon={require('../assets/images/lock.png')} />
            <CommonButton title={'SignUp'} bgcolor={"#000"} onPress={() => { }} textColor={"#fff"} />
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
                    navigation.goBack();
                }}>Already Have an account / SignIn
            </Text>
        </ScrollView>
    )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginBottom:30,
        backgroundColor: '#2596be',
    },
    img: {
        width: 140,
        height: 140,
        alignSelf: 'center',
        marginTop: 50,
        borderRadius: 100
    },
    text: {
        marginTop: 20,
        alignSelf: 'center',
        fontSize: 25,
        color: '#000',
        textAlign: 'center',
        fontWeight: '800',
    },
    placeholderTextColor: {
        color: 'red'
    },
})