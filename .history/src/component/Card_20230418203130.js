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

const Card = ({ item }) => {
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
        <TouchableOpacity>
          <Text>
            add to cart
          </Text>
        </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 200,
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
    paddingRight: 10,
  },
  cartBtn:{
    borderWidth:1,
    borderRadius:15,
    padding
  },
});
