/* eslint-disable no-unused-vars */
import {FlatList, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import CardItem from '../component/CardItem';

const Cart = () => {
  const cartData = useSelector(state => state.Reducers);
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={cartData}
        // keyExtractor={(item) => item.id}
        renderItem={({item}) => {
          return <CardItem item={item} />;
        }}
      />
    </View>
  );
};

export default Cart;
