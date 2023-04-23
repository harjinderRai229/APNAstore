import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const Checkout = () => {
  const cartData= useSelector(state => state.Reducers);
  return (
    <View style={{flex:1}}>
    <FlatList
    data={cartData}
    renderItem={({item ,index})=>{
      return (
        <View style={styles.checkoutItem}>
        </View>
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
    
  }
})