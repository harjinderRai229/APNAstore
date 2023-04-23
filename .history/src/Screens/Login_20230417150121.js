import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Login = () => {
  return (
    <View style={styles.container}> 
    <Image source={require('../assets/images/playstore.png')} style={styles.img}/>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    img:{
        width:200,
        height:200,
        alignSelf:'center',
        marginTop:100,
        bg
    },
})