import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const Checkout = () => {
  const cartData= useSelector()
  return (
    <View style={{flex:1}}>
    <FlatList

    />
   
    </View>
  )
}

export default Checkout

const styles = StyleSheet.create({})