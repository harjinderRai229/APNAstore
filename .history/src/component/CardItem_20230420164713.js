/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';

const Card = ({item, onRemoveItem, onAddWishList, isWishList}) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.name}</Text>
      <View style={styles.cart}>
        <Text style={styles.price}>${item.price}</Text>
        { isWishList ? null : (

        )}
       
      </View>
      <TouchableOpacity
        style={{
          width: 40,
          height: 40,
          backgroundColor: '#fff',
          borderRadius: 20,
          elevation: 5,
          position: 'absolute',
          top: 25,
          right: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          onAddWishList(item);
        }}>
        <Image
          source={require('../assets/images/heart.png')}
          style={{width: 24, height: 24}}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    width: "94%",
    // height: 200,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop:10
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
    marginLeft: 10,
    // textAlign: 'center',
  },
  price: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
    // textAlign: 'center',
  },
  cart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    alignItems: 'center',
    paddingRight: 10,
    marginTop: 10,
    // paddingBottom:20
    // marginBottom:10
  },
  cartBtn: {
    borderWidth: 1,
    borderRadius: 10,
    paddingBottom: 5,
    paddingBottom: 7,
    paddingTop: 7,
    paddingLeft: 5,
    paddingRight: 10,
  },
});
