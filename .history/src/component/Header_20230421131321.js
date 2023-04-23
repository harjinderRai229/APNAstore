import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Header = () => {
    const handleLogout=()
    return (<View style={styles.container}>
        <Text style={styles.text}>
            Apna Store
        </Text>
        <Text
        // onPress={}         
        style={{marginRight:20}}>
            Logout
        </Text>
    </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 70,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 0.2,
        borderBottomColor: 'grey',
        backgroundColor: '#fff',
    },
    text: {
        fontWeight: '600',
        fontSize: 20,
        color: '#000',
        marginLeft: 20,
    },
});
