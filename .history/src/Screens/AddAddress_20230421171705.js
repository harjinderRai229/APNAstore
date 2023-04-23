import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const AddAddress = () => {
    const navigation =useNavigation();
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.btn}
                    onPress={() => {
                        navigation.goBack()
                    }}
                >
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AddAddress

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
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        padding: 5,
        borderRadius: 10,
    },
    image: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 30,
    },
})