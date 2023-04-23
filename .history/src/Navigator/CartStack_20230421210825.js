// /* eslint-disable no-unused-vars */
// /* eslint-disable react-native/no-inline-styles */


import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import Cart from '../Screens/Cart';
const Stack = createNativeStackNavigator();
const CardStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Cart">
      <Stack.Screen name="Cart" component={Cart} />

      <Stack.Screen name="Cart" component={Ch} />

    </Stack.Navigator>
  );
};

export default CardStack;

const styles = StyleSheet.create({});





// // import React from 'react';
// // import { StyleSheet, View, Text, FlatList } from 'react-native';
// // import CartItem from '../component/CardItem';
// // import { useSelector } from 'react-redux';

// // const CardStack = () => {
// //   const cartData = useSelector(state => state.Reducers);
// //   const renderItem = ({ item }) => <CartItem item={item} />;

// //   return (
// //     <View style={styles.container}>
// //       {/* <Text style={styles.title}>Cart</Text> */}

// //       <FlatList
// //         data={cartData}
// //         renderItem={renderItem}
// //         keyExtractor={item => item.id.toString()}
// //       />

// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#f2f2f2',
// //     padding: 10,
// //   },
// //   title: {
// //     fontSize: 20,
// //     fontWeight: 'bold',
// //     marginBottom: 10,
// //   },
// //   emptyText: {
// //     fontSize: 16,
// //     color: '#888',
// //     textAlign: 'center',
// //     marginTop: 50,
// //   },
// // });

// // export default CardStack;
