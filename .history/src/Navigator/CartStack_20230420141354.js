// import { FlatList, StyleSheet, Text, View } from 'react-native';
// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import CardItem from '../component/CardItem';

// const CartStack = () => {
//   const [cartList, setCartList] = useState([]);
//   const cartData = useSelector(state => state.Reducers);
//   // setCartList(cartData);
//   return (
//     <View style={{ flex: 1 }}>
//       <FlatList data={cartData}
//         renderItem={({ item, index }) => {
//           return (
//             <CardItem item={item} />
//           );
//         }}
//       />
//     </View>
//   );
// };

// export default CartStack;

// const styles = StyleSheet.create({});

import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import CartItem from '../component/CardItem';
import { useSelector } from 'react-redux';

const CardStack = ({cartItems}) => {
  const cartData = useSelector(state => state.Reducers);
  const renderItem = ({item}) => <CartItem item={item} />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart</Text>
      {cartItems.length > 0 ? (
        <FlatList
          data={cartItems}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      ) : (
        <Text style={styles.emptyText}>Your cart is empty</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  emptyText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginTop: 50,
  },
});

export default CardStack;
