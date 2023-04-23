import {FlatList, Text, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CardItem from '../component/CardItem';
import {removeFromCart, removeFromWishList} from '../redux/action/Action';

const WishList = () => {
  const dispatch = useDispatch();
  const cartData = useSelector(state => state.Reducers2);
  return (
    <View style={{flex: 1}}>
      {cartData && cartData.length > 0 ? (
        <FlatList
          data={cartData}
          renderItem={({item, index}) => {
            return (
              <CardItem
                item={item}
                onRemoveItem={() => {
                  dispatch(removeFromC(index));
                }}
              />
            );
          }}
        />
      ) : (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Your cart is empty.</Text>
        </View>
      )}
    </View>
  );
};

export default WishList;
