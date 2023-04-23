import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const CartStack = () => {
  const [cartList, setCartList] = useState([]);
  return (
    <View style={{flex:1}}>
    <FlatList/>
    </View>
  )
}

export default CartStack

const styles = StyleSheet.create({})