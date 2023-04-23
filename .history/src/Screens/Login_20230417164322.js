import { Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import CustomTextInput from '../component/CustomTextInput'
import CommonButton from '../component/CommonButton'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [badEmail , setBadEmail] = useState(false);
    const [badPassword , setBadPassword] = useState(false);
    const validate = () => {
        if(email == ''){
            setBadEmail(true);
        }
        if(password ==''){
            setBadPassword(true);
        }
        

    }
    return (
        <ScrollView style={styles.container}>
            <Image source={require('../assets/images/a2.png')} style={styles.img} />
            <Text style={styles.text}>
                Login
            </Text>
            <CustomTextInput placeholder={"Email"} icon={require('../assets/images/email.png')} />
            {
                badEmail === true && (<Text style={{color:'red', ma}}>Please Enter Email Id</Text>)
            }
            <CustomTextInput placeholder={"Password"} type={"password"} icon={require('../assets/images/lock.png')} />
            <CommonButton title={'Login'} bgcolor={"#000"} onPress={() => {validate(); }} textColor={"#fff"} />
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
        fontWeight: '800',
    },
    placeholderTextColor: {
        color: 'red'
    },
})