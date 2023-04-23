import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CartStack = () => {
  const [cart, setcart] = useState(initialState)
  return (
    <View style={{flex:1}}>
    <FlatList/>
    </View>
  )
}

export default CartStack

const styles = StyleSheet.create({})