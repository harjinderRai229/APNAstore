import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';

const AddAddress = () => {
  return (
    <View style={{ flex: 1 }}>
    <View style={styles.header}>
        <Text style={styles.headerText}>My Address</Text>
        <TouchableOpacity style={styles.btn}
        onPress={()=>{
            navigation.navigate('AddAddress');
        }}
        >
        <Text>Add Address</Text>
        </TouchableOpacity>
    </View>
</View>
  )
}

export default AddAddress

const styles = StyleSheet.create({})
