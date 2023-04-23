import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Card = ({route}) => {
    const {item} = route.
  return (
    <View style={styles.card}>
      <Image source={item.image} />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 40,
  },
});
