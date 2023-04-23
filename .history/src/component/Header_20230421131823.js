import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
    const navigation = useNavigation()
    const handleLogout = async () => {
        try {
          // Remove user data from async storage
          await AsyncStorage.removeItem('EMAIL');
          await AsyncStorage.removeItem('PASSWORD');
          await AsyncStorage.removeItem('TOKEN');
          // Navigate to the login screen
          
        } catch (error) {
          console.log(error);
        }
      };
    return (<View style={styles.container}>
        <Text style={styles.text}>
            Apna Store
        </Text>
        <Text
            onPress={handleLogout}         
            style={{ marginRight: 20 }}>
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
