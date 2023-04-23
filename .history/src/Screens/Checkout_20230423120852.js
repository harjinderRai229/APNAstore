import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const Checkout = () => {
  const cartData= useSelector(state => state.Reducers);
  return (
   <SafeAreaView
      )
    }}

    />
   
    </View>
  )
}

export default Checkout

const styles = StyleSheet.create({
  checkoutItem: {
    // flex: 1,
    flexDirection: 'row',
    width:'100%',
    height:70,
  },
  checkoutImage: {
    width:70,
    height:70,
  },
})