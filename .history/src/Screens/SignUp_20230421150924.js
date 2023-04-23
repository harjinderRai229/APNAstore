// // import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
// // import React from 'react'
// // import CustomTextInput from '../component/CustomTextInput'
// // import CommonButton from '../component/CommonButton'
// // import { useNavigation } from '@react-navigation/native'
// // import Button from '../component/CommonButton'

// // const SignUp = () => {
// //     const navigation = useNavigation();
// //     return (
// //         <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
// //             <Image source={require('../assets/images/a2.png')} style={styles.img} />
// //             <Text style={styles.text}>
// //                 Create New Account
// //             </Text>
// //             <CustomTextInput placeholder={"Enter Your Name"} icon={require('../assets/images/user.png')} />
// //             <CustomTextInput placeholder={"Enter Your Email"} icon={require('../assets/images/email.png')} />
// //             <CustomTextInput placeholder={"Enter Your Number"} icon={require('../assets/images/phone.png')} />
// //             <CustomTextInput placeholder={"Password"} type={"password"} icon={require('../assets/images/lock.png')} />
// //             {/* <Button title={'SignUp'} bgcolor={"#000"} onPress={() => { }} textColor={"#fff"} /> */}

// //             <Button title={"SignUp"} bgColor={"#000"} textColor={"#fff"}/>
// //             <Text style={
// //                 [
// //                     styles.text,
// //                     {
// //                         fontSize: 18,
// //                         marginTop: 20,
// //                         textDecorationLine: 'underline'
// //                     }
// //                 ]
// //             }
// //                 onPress={() => {
// //                     navigation.goBack();
// //                 }}>Already Have an account / SignIn
// //             </Text>
// //         </ScrollView>
// //     )
// // }

// // export default SignUp

// // const styles = StyleSheet.create({
// //     container: {
// //         flex: 1,
// //         // marginBottom:30,
// //         backgroundColor: '#2596be',
// //     },
// //     img: {
// //         width: 140,
// //         height: 140,
// //         alignSelf: 'center',
// //         marginTop: 50,
// //         borderRadius: 100
// //     },
// //     text: {
// //         marginTop: 20,
// //         alignSelf: 'center',
// //         fontSize: 25,
// //         color: '#000',
// //         textAlign: 'center',
// //         fontWeight: '800',
// //     },
// //     placeholderTextColor: {
// //         color: 'red'
// //     },
// // })

// import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
// import React, { useState } from 'react'
// import CustomTextInput from '../component/CustomTextInput'
// import CommonButton from '../component/CommonButton'
// import { useNavigation } from '@react-navigation/native'
// import Button from '../component/CommonButton'

// const SignUp = () => {
//   const navigation = useNavigation();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const [nameError, setNameError] = useState(false);
//   const [emailError, setEmailError] = useState(false);
//   const [phoneError, setPhoneError] = useState(false);
//   const [passwordError, setPasswordError] = useState(false);

//   const handleSignUp = () => {
//     if (!name.trim()) {
//       setNameError(true);
//     } else {
//       setNameError(false);
//     }
//     if (!email.trim()) {
//       setEmailError(true);
//     } else {
//       setEmailError(false);
//     }
//     if (!phone.trim()) {
//       setPhoneError(true);
//     } else {
//       setPhoneError(false);
//     }
//     if (!password.trim()) {
//       setPasswordError(true);
//     } else {
//       setPasswordError(false);
//     }

//     if (name && email && phone && password) {
//       // perform signup action
//     }
//   }

//   return (
//     <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
//       <Image source={require('../assets/images/a2.png')} style={styles.img} />
//       <Text style={styles.text}>
//         Create New Account
//       </Text>
//       <CustomTextInput
//         placeholder={"Enter Your Name"}
//         icon={require('../assets/images/user.png')}
//         onChangeText={(text) => setName(text)}
//         error={nameError}
//         errorText={"Please enter your name"}
//       />
//       <CustomTextInput
//         placeholder={"Enter Your Email"}
//         icon={require('../assets/images/email.png')}
//         onChangeText={(text) => setEmail(text)}
//         error={emailError}
//         errorText={"Please enter a valid email address"}
//         keyboardType={"email-address"}
//       />
//       <CustomTextInput
//         placeholder={"Enter Your Number"}
//         icon={require('../assets/images/phone.png')}
//         onChangeText={(text) => setPhone(text)}
//         error={phoneError}
//         errorText={"Please enter a valid phone number"}
//         keyboardType={"phone-pad"}
//       />
//       <CustomTextInput
//         placeholder={"Password"}
//         type={"password"}
//         icon={require('../assets/images/lock.png')}
//         onChangeText={(text) => setPassword(text)}
//         error={passwordError}
//         errorText={"Please enter a valid password"}
//         secureTextEntry
//       />
//       <CommonButton title={"SignUp"} bgColor={"#000"} textColor={"#fff"} onPress={handleSignUp} />
//       <Text style={[styles.text, { fontSize: 18, marginTop: 20, textDecorationLine: 'underline' }]} onPress={() => navigation.goBack()}>
//         Already Have an account / SignIn
//       </Text>
//     </ScrollView>
//   )
// }

// export default SignUp

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#2596be',
//   },
//   img: {
//     width: 140,
//     height: 140,
//     alignSelf: 'center',
//     marginTop: 50,
//     borderRadius: 100
//   },
//   text: {
//     marginTop: 20,
//     alignSelf: 'center',
//     fontSize: 25,
//     color: '#000',
//     textAlign: 'center',
//     fontWeight: '800',
//   },
// })

import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CustomTextInput from '../component/CustomTextInput';
import CommonButton from '../component/CommonButton';
import {useNavigation} from '@react-navigation/native';
import Button from '../component/CommonButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
// Add this line to your `index.js`

import ImagePicker from 'react-native-image-crop-picker';
import 'react-native-get-random-values';

import {v4 as uuidv4} from 'uuid';
import ImageCropPicker from 'react-native-image-crop-picker';
const SignUp = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [image, setImage] = useState(null);
  const handleSignUp = () => {
    // const navigation=useNavigation();
    if (name === '' || email === '' || number === '' || password === '') {
      setError('All fields are required.');
    } else if (!validateEmail(email)) {
      setError('Invalid email address.');
    } else if (number.length !== 10) {
      setError('Invalid phone number.');
    } else if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
    } else {
      saveData();
    }
  };
  //save data using async Storage
  const saveData = async () => {
    const token = uuidv4();
    await AsyncStorage.setItem('NAME', name);
    await AsyncStorage.setItem('EMAIL', email);
    await AsyncStorage.setItem('NUMBER', number);
    await AsyncStorage.setItem('PASSWORD', password);
    await AsyncStorage.setItem('TOKEN', token);
    navigation.goBack();
    console.log('name::::::::::::::::::::::', name);
    console.log('token::::::::::::::::::::::', token);
  };

  const validateEmail = email => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
  const selectImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image);
    });

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Image source={require('../assets/images/a2.png')} style={styles.img} />
      <Text style={styles.text}>Create New Account</Text>
      <Pressable onPress={selectImage}>
        <Image
          source={image ? {uri: image} : require('../assets/images/boy.jpeg')}
          style={styles.imgPlaceholder}
        />
      </Pressable>
      <CustomTextInput
        placeholder={'Enter Your Name'}
        icon={require('../assets/images/user.png')}
        value={name}
        onChangeText={setName}
      />
      <CustomTextInput
        placeholder={'Enter Your Email'}
        icon={require('../assets/images/email.png')}
        value={email}
        onChangeText={setEmail}
      />
      <CustomTextInput
        placeholder={'Enter Your Number'}
        icon={require('../assets/images/phone.png')}
        keyboardType={'numeric'}
        value={number}
        onChangeText={setNumber}
      />
      <CustomTextInput
        placeholder={'Password'}
        type={'password'}
        icon={require('../assets/images/lock.png')}
        value={password}
        onChangeText={setPassword}
      />
      {error !== '' && <Text style={styles.error}>{error}</Text>}
      <Button
        title={'Sign Up'}
        bgColor={'#000'}
        textColor={'#fff'}
        onPress={handleSignUp}
      />
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
          navigation.goBack();
        }}>
        Already Have an account / Sign In
      </Text>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2596be',
  },
  img: {
    width: 140,
    height: 140,
    alignSelf: 'center',
    marginTop: 50,
    borderRadius: 100,
  },
  text: {
    marginTop: 20,
    alignSelf: 'center',
    fontSize: 25,
    color: '#000',
    textAlign: 'center',
    fontWeight: '800',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
});
