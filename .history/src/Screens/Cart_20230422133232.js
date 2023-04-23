/* eslint-disable react-native/no-inline-styles */
import {FlatList, Text, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CardItem from '../component/CardItem';
import {addToWishList, removeFromCart} from '../redux/action/Action';
import Button from '../component/Button';
import RazorpayCheckout from 'react-native-razorpay';
import {useNavigation} from '@react-navigation/native';
const Cart = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const cartData = useSelector(state => state.Reducers);
  const onPress = () => {
    dispatch(addToWishList(cartData.cart.items));
    console.log(addToWishList)
  }
  return (
    <View style={{flex: 1}}>
      {cartData && cartData.length > 0 ? (
        <FlatList
          data={cartData}
          // keyExtractor={(item) => item.id}
          renderItem={({item, index}) => {
            return (
              <CardItem
                item={item}
                onAddWishList={x => {
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
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Your cart is empty.</Text>
        </View>
      )}
      {cartData.length > 0 ? (
        <View style={{marginBottom: 20}}>
          <Button
            title={'CheckOut'}
            bgColor={'green'}
            textColor={'white'}
            onPress={() => {
              //   var options = {
              //     description: 'Credits towards consultation',
              //     image: require('../assets/images/a2.png'),
              //     currency: 'INR',
              //     key: 'rzp_test_cajh7ufUUOls97', // Your api key
              //     amount: '5000',
              //     name: 'foo',
              //     prefill: {
              //       email: 'void@razorpay.com',
              //       contact: '9191919191',
              //       name: 'Razorpay Software'
              //     },
              //     theme: { color: '#F37254' }
              //   }
              //   RazorpayCheckout.open(options).then((data) => {
              //     // handle success
              //     alert(`Success: ${data.razorpay_payment_id}`);
              //   }).catch((error) => {
              //     // handle failure
              //     alert(`Error: ${error.code} | ${error.description}`);
              //   });
              navigation.navigate('Checkout');
            }}
          />
        </View>
      ) : null}
    </View>
  );
};

export default Cart;
