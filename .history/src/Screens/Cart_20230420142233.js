import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import CardItem from '../component/CardItem';

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const cartData = useSelector(state => state.Reducers);
  // setCartList(cartData);
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={cartData}
        renderItem={({item, index}) => {
          return <CardItem item={item} />;
        }}
      />
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});