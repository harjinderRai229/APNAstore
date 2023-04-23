import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const MyAddress = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.header}>
                <Text style={styles.headerText}>My Address</Text>
                <TouchableOpacity style={styles.btn}>
                <Text>Add Address</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MyAddress

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 70,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    headerText: {
        color: '#000',
        fontWeight: '600',
        fontSize: 18,
        marginLeft: 15,
    },
    btn: {
        marginRight: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth:2,
        padding:5,
        br
    },
    image: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 30,
    },
})