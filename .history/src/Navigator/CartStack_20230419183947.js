import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';

const CartStack = () => {
  const [cartList, setCartList] = useState([]);
  const cartData =useSelector(state => state.)
  return (
    <View style={{flex:1}}>
    <FlatList/>
    </View>
  )
}

export default CartStack

const styles = StyleSheet.create({})