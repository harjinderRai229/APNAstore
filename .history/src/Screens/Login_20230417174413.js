// import { Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
// import React, { useState } from 'react'
// import CustomTextInput from '../component/CustomTextInput'
// import CommonButton from '../component/CommonButton'
// import { useNavigation } from '@react-navigation/native'
// import Button from '../component/Button'

// const Login = () => {
//     const navigation = useNavigation();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [badEmail, setBadEmail] = useState(false);
//     const [badPassword, setBadPassword] = useState(false);

//     const validate = () => {
//         if (email === '') {
//             setBadEmail(true);
//         } else if (!isValidEmail(email)) {
//             setBadEmail(true);
//         } else {
//             setBadEmail(false);
//         }

//         if (password === '') {
//             setBadPassword(true);
//         } else {
//             setBadPassword(false);
//         }
//     };

//     const isValidEmail = (email) => {
//         return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//     };

//     return (
//         <ScrollView style={styles.container}>
//             <Image source={require('../assets/images/a2.png')} style={styles.img} />
//             <Text style={styles.text}>
//                 Login
//             </Text>
//             <CustomTextInput 
//                 placeholder={"Email"}
//                 value={email}
//                 onChangeText={(email) => setEmail(email)}
//                 icon={require('../assets/images/email.png')}
//                 placeholderTextColor={'red'}
//             />
//             {
//                 badEmail && (
//                     <Text style={{
//                         color: 'red',
//                         marginTop: 10,
//                         marginLeft: 40,
//                         fontWeight: '800'
//                     }}>
//                         {isValidEmail(email) ? 'Please Enter Email Id' : 'Please Enter Valid Email Id'}
//                     </Text>
//                 )
//             }
//             <CustomTextInput 
//                 placeholder={"Password"}
//                 value={password}
//                 onChangeText={(password) => setPassword(password)}
//                 type={"password"} 
//                 icon={require('../assets/images/lock.png')}
//                 placeholderTextColor={'red'}
//             />
//             {
//                 badPassword && (
//                     <Text style={{
//                         color: 'red',
//                         marginTop: 10,
//                         marginLeft: 40,
//                         fontWeight: '800'
//                     }}>
//                         Please Enter Password
//                     </Text>
//                 )
//             }
//             <Button title={"Login"} bgColor={"#000"} textColor={"#fff"} onPress={validate} />
//             <Text style={[
//                 styles.text,
//                 {
//                     fontSize: 18,
//                     marginTop: 20,
//                     textDecorationLine: 'underline'
//                 }
//             ]}
//                 onPress={() => {
//                     navigation.navigate("SignUp")
//                 }}>
//                 Create New Account ?
//             </Text>
//         </ScrollView>
//     )
// }

// export default Login

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#2596be',
   

//     },
//     img: {
//         width: 140,
//         height: 140,
//         alignSelf: 'center',
//         marginTop: 100,
//         borderRadius: 100,
//     },
//     text: {
//         marginTop: 40,
//         alignSelf: 'center',
//         fontSize: 25,
//         color: '#000',
//         textAlign: 'center',
//         fontWeight: '800',
//     },
//     errorText: {
//         color: 'red',
//         marginTop: 10,
//         marginLeft: 40,
//         fontWeight: '800',
//     },
// });



import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomTextInput from '../component/CustomTextInput'
import CommonButton from '../component/CommonButton'
import { useNavigation } from '@react-navigation/native'
import Button from '../component/CommonButton'

const SignUp = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSignUp = () => {
    if (!name.trim()) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    if (!email.trim()) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    if (!phone.trim()) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
    if (!password.trim()) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }

    if (name && email && phone && password) {
      // perform signup action
    }
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Image source={require('../assets/images/a2.png')} style={styles.img} />
      <Text style={styles.text}>
        Create New Account
      </Text>
      <CustomTextInput
        placeholder={"Enter Your Name"}
        icon={require('../assets/images/user.png')}
        onChangeText={(text) => setName(text)}
        error={nameError}
        errorText={"Please enter your name"}
      />
      <CustomTextInput
        placeholder={"Enter Your Email"}
        icon={require('../assets/images/email.png')}
        onChangeText={(text) => setEmail(text)}
        error={emailError}
        errorText={"Please enter a valid email address"}
        keyboardType={"email-address"}
      />
      <CustomTextInput
        placeholder={"Enter Your Number"}
        icon={require('../assets/images/phone.png')}
        onChangeText={(text) => setPhone(text)}
        error={phoneError}
        errorText={"Please enter a valid phone number"}
        keyboardType={"phone-pad"}
      />
      <CustomTextInput
        placeholder={"Password"}
        type={"password"}
        icon={require('../assets/images/lock.png')}
        onChangeText={(text) => setPassword(text)}
        error={passwordError}
        errorText={"Please enter a valid password"}
        secureTextEntry
      />
      <CommonButton title={"SignUp"} bgColor={"#000"} textColor={"#fff"} onPress={handleSignUp} />
      <Text style={[styles.text, { fontSize: 18, marginTop: 20, textDecorationLine: 'underline' }]} onPress={() => navigation.goBack()}>
        Already Have an account / SignIn
      </Text>
    </ScrollView>
  )
}

export default SignUp

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
})
