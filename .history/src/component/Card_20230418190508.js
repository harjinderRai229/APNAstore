import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = () => {
  return (
    <View style={styles.card}>
    <Text style={styles.title}>
        {'Card'}
    </Text>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    card:{
        width: 150,
        height: 150,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation:5,
        p
    },
})