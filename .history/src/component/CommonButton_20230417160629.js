import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CommonButton = ({ onPress, title, bgcolor , textColor }) => {
    return (
        <TouchableOpacity
            style={[styles.buttonStyle,{backgroundColor: bg}]}
            onPress={onPress}>
            <Text>{title}</Text>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    buttonStyle: {
        // backgroundColor: bgcolor,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CommonButton;

