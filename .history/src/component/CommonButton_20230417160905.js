import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CommonButton = ({ onPress, title, bgcolor, textColor }) => {
    return (
        <TouchableOpacity
            style={[styles.buttonStyle, { backgroundColor: bgcolor }]}
            onPress={onPress}>
            <Text>{title}</Text>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    buttonStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: "85%",
        height: 40,
        borderRadius: 18,
        alignSelf: 'center',
        marginTop: 50,
    },
});

export default CommonButton;

