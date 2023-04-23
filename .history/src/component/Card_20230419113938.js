// import {Image, StyleSheet, Text, View} from 'react-native';
// import React from 'react';

// const Card = ({item}) => {
//   return (
//     <View style={styles.card}>
//     <Text></Text>
//       {/* <Image source={item.image} style={styles.image}/> */}
//     </View>
//   );
// };

// export default Card;

// const styles = StyleSheet.create({
//   card: {
//     width: 150,
//     height: 150,
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     elevation: 5,
//     marginLeft: 10,
//     marginTop: 10,
//     marginBottom: 10,
//   },
//   image: {
//     width: 100,
//     height: 40,
//   },
// });

import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';

const Card = ({ item, onAddToCart }) => {
  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <View style={styles.card}>
        {/* <Image source={{uri: item}} style={styles.image} /> */}
        <Image
          // source={{
          //   uri: typeof item.image === 'image' ? item.image.uri : item.image,
          // }}
          source={require('../assets/images/a2.png')}
          style={styles.image}
        />
        <Text style={styles.title}>{item.name}</Text>
        <View style={styles.cart}>
          <Text style={styles.price}>${item.price}</Text>
          <TouchableOpacity style={styles.cartBtn}
            onPress={() => {
onAddToCart(item);
            }}>
            <Text>Add to cart</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{
          width: 40,
          height: 40,
          backgroundColor: "#fff",
          borderRadius: 20,
          elevation: 5,
          position: 'absolute',
          top: 25,
          right: 10,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Image source={require('../assets/images/heart.png')}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 250,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center',
    padding: 10,
  },
  image: {
    width: '100%',
    height: '70%',
    resizeMode: 'contain',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    // textAlign: 'center',
  },
  price: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
    // textAlign: 'center',
  },
  cart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    alignItems: 'center',
    // paddingRight: 10,
    // paddingBottom:40
    // marginBottom:10
  },
  cartBtn: {
    borderWidth: 1,
    borderRadius: 10,
    paddingBottom: 5,
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 10,
  },
});
