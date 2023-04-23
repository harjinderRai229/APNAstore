import { Alert, Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import CustomTextInput from '../component/CustomTextInput'
import CommonButton from '../component/CommonButton'
import { useNavigation } from '@react-navigation/native'
import Button from '../component/Button'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [badEmail, setBadEmail] = useState(false);
    const [badPassword, setBadPassword] = useState(false);

    const validate = () => {
        if (email === '') {
            setBadEmail(true);
        } else if (!isValidEmail(email)) {
            setBadEmail(true);
        } else {
            setBadEmail(false);
        }

        if (password === '') {
            setBadPassword(true);
        } else {
            setBadPassword(false);
        }
        getData();
    };

    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };
    const getData = async () =>{
        const mEmail = await AsyncStorage.getItem('EMAIL');
        const mPass = await AsyncStorage.getItem('PASSWORD');
        if(email === mEmail && password === mPass){
            navigation.navigate('Home');
        }
        else if (email != mEmail ){
            Alert.alert("Email is not MAtc")
        }
        // console.log("<<<<<<<<<<<<<<<<<<______________________>>>>>>>>>>>>>>>>>>>>>>>>>></______________________ `$mEMAIL`", mEmail)
    }

    return (
        <ScrollView style={styles.container}>
            <Image source={require('../assets/images/a2.png')} style={styles.img} />
            <Text style={styles.text}>
                Login
            </Text>
            <CustomTextInput 
                placeholder={"Email"}
                value={email}
                onChangeText={(email) => setEmail(email)}
                icon={require('../assets/images/email.png')}
                placeholderTextColor={'red'}
            />
            {
                badEmail && (
                    <Text style={{
                        color: 'red',
                        marginTop: 10,
                        marginLeft: 40,
                        fontWeight: '800'
                    }}>
                        {isValidEmail(email) ? 'Please Enter Email Id' : 'Please Enter Valid Email Id'}
                    </Text>
                )
            }
            <CustomTextInput 
                placeholder={"Password"}
                value={password}
                onChangeText={(password) => setPassword(password)}
                type={"password"} 
                icon={require('../assets/images/lock.png')}
                placeholderTextColor={'red'}
            />
            {
                badPassword && (
                    <Text style={{
                        color: 'red',
                        marginTop: 10,
                        marginLeft: 40,
                        fontWeight: '800'
                    }}>
                        Please Enter Password
                    </Text>
                )
            }
            <Button title={"Login"} bgColor={"#000"} textColor={"#fff"} onPress={validate} />
            <Text style={[
                styles.text,
                {
                    fontSize: 18,
                    marginTop: 20,
                    textDecorationLine: 'underline'
                }
            ]}
                onPress={() => {
                    navigation.navigate("SignUp")
                }}>
                Create New Account ?
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
