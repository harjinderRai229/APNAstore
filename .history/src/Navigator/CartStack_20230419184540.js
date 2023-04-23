import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';

const CartStack = () => {
  const [cartList, setCartList] = useState([]);
  const cartData = useSelector(state => state.Reducers());
  return (
    <View style={{ flex: 1 }}>
      <FlatList data={cartList}
        renderItem={({ item, index }) => {
          return (
            <Ca
          )
        }}
      />
    </View>
  )
}

export default CartStack

const styles = StyleSheet.create({})