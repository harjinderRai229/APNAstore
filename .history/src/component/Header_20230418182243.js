import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const  Header = () => {
  return (
    <View>
      <Text> Header</Text>
    </View>
  )
}

export default  Header

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 70,
        justifyContent:'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth:0.2,
        borderBottomColor:'grey',
    },
})