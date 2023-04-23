import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = () => {
  return (
    <View style={styles.card}>
    <Text style={styles.title}>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    card:{
        width: 200,
        height: 200,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation:5,
    },
})