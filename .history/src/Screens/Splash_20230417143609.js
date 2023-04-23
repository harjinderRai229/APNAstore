import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const Splash = () => {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            // navigation.navigate("Login")
        })
    }, [3000])
    return (
        <View style={styles.container}>
            <Image source={require ('../assets/images/playstore.png')} style={styles.image}/>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center',
    },
    im
})