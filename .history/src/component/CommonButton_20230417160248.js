import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const CommonButton = ({ onPress, title, bgcolor }) => {
    return (
        <TouchableOpacity>
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}

export default CommonButton

const styles = StyleSheet.create({
    buttonStyle:{
        backgroundColor: bgcolor,
        justifyContent:'center,'        
    },
})