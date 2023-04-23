import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomTextInput = ({ value, onChangeText, placeholder, icon, type, }) => {
    return (
        <View style={styles.container}>

        </View>
    )
}

export default CustomTextInput

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        width: "85%",
        height: 58,
        borderRadius: 10,
        borderWidth: 0.5,
        marginTop: 40
    },
})