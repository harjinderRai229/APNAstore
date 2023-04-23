import {FlatList, Text, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CardItem from '../component/CardItem';
import {removeFromWishList} from '../redux/action/Action';

const WishList = () => {
  const dispatch = useDispatch();
  const cartData = useSelector(state => state.Reducers2);
  return (
    <View style={{flex: 1}}>
      {cartData && cartData.length > 0 ? (
        <FlatList
          data={cartData}
          // keyExtractor={(item) => item.id}
          renderItem={({item, index}) => {
            return (
              <CardItem
                isWishList={'remove'}
                item={item}
                on
                onRemoveItem={() => {
                  dispatch(removeFromWishList(index));
                }}
              />
            );
          }}
        />
      ) : (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Your WishList is empty.</Text>
        </View>
      )}
    </View>
  );
};

export default WishList;
