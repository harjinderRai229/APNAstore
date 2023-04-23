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

import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Card = ({item}) => {
  return (
    <View style={styles.card}>
      {/* <Image source={{uri: item}} style={styles.image} /> */}
      <Image
        // source={{
        //   uri: typeof item.image === 'image' ? item.image.uri : item.image,
        // }}
        source={require}
        style={styles.image}
      />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.price}>${item.price}</Text>
    </View>
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
    alignItems: 'center',
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
    textAlign: 'center',
  },
  price: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
    textAlign: 'center',
  },
});
