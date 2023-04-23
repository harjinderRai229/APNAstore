import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const Button = ({ title, style, textStyle, onPress, bgColor }) => {
    return (
        <View>
            <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
                <Text style={[styles.text, textStyle]}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Button;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: "85%",
        height: 40,
        borderRadius: 18,
        alignSelf: 'center',
        marginTop: 50,
    },
    text: {
        fontSize: 10,
        fontWeight: '900',
        color: 'white',
        paddingTop: 2,
        textAlign: 'center',
    },
});