import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import CardItem from '../component/CardItem';

const CartStack = () => {
  const [cartList, setCartList] = useState([]);
  const cartData = useSelector(state => state.Reducers());
  setCartList()
  return (
    <View style={{ flex: 1 }}>
      <FlatList data={cartList}
        renderItem={({ item, index }) => {
          return (
            <CardItem item={item}/>
          )
        }}
      />
    </View>
  )
}

export default CartStack

const styles = StyleSheet.create({})