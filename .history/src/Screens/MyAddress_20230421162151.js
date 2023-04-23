import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MyAddress = () => {
  return (
    <View style={{flex:1}}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Profile</Text>
        <TouchableOpacity style={styles.btn}>
          <Image
            source={require('../assets/images/settings.png')}
            style={{
              width: 20,
              height: 20,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default MyAddress

const styles = StyleSheet.create({})