/* eslint-disable no-unused-vars */
import { FlatList, Text, View } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardItem from '../component/CardItem';

const Cart = () => {
  const dispatch =useDispatch(0;)
  const cartData = useSelector(state => state.Reducers);
  return (
    <View style={{ flex: 1 }}>
      {cartData && cartData.length > 0 ? (
        <FlatList
          data={cartData}
          // keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return <CardItem item={item}  onRemoveItem={()=>{

            }}/>;
          }}
        />
      ) : (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Your cart is empty.</Text>
        </View>
      )}
    </View>
  );
};

export default Cart;
