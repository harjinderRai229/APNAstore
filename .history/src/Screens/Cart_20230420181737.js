import { FlatList, Text, View } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardItem from '../component/CardItem';
import { addToWishList, removeFromCart } from '../redux/action/Action';

const Cart = () => {
  const dispatch = useDispatch();
  const cartData = useSelector(state => state.Reducers);
  return (
    <View style={{ flex: 1 }}>
      {cartData && cartData.length > 0 ? (
        <FlatList
          data={cartData}
          // keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => {
            return (
              <CardItem
                item={item}
                onAddWishList={(x) => {
                  dispatch(addToWishList(x));

                }}
                onRemoveItem={() => {
                  dispatch(removeFromCart(index));
                }}
              />
            );
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
