import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Profile = () => {
  return (
    <View style={{flex:1}}>
     <View style={{width:'100%',
     height:70,
     justifyContent:'space-between',
     alignItems:'center',
     }}>
     <Text>
        Profile
     </Text>
     <TouchableOpacity style={{width:30,height:20,justifyContent:'center',alignContent:'center'}}>

     </TouchableOpacity>

     </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})