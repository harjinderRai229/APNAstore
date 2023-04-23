/* eslint-disable no-unused-vars */
import { FlatList, View, Text } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import CardItem from '../component/CardItem';

const Cart = () => {
  const cartData = useSelector(state => state.cart);
  return (
    <View style={{ flex: 1 }}>
      {cartData.length === 0 ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Your cart is empty!</Text>
        </View>
      ) : (
        <FlatList
          data={cartData}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return <CardItem item={item} />;
          }}
        />
      )}
    </View>
  );
};

export default Cart;
