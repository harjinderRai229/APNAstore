import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Login = () => {
  return (
    <View style={styles.container}> 
    <Image source={require('../assets/images/playstore.png')} style={styles.img}/>
    <
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    img:{
        width:100,
        height:100,
        alignSelf:'center',
        marginTop:100,
        borderRadius:600
    },
    text:{},
})