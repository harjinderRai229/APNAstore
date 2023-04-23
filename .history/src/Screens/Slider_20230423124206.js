// /* eslint-disable react-native/no-inline-styles */
// import {Alert, StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import {SliderBox} from 'react-native-image-slider-box';

// const Slider = () => {
//   const images = [
//     require('../assets/images/t.jpeg'),
//     require('../assets/images/s1.jpeg'),
//     require('../assets/images/s2.jpeg'),
//     require('../assets/images/s3.jpeg'),
//     require('../assets/images/t.jpeg'),
//   ];
//   return (
//     <View>
//       <SliderBox
//         style={styles.Slider}
//         images={images}
//         dotColor="white"
//         inactiveDotColor="silver"
//         autoplay={true}
//         circleLoop={true}
//         autoplayInterval={3000}
//         dotStyle={{
//           height: 10,
//           width: 20,
//           // marginTop: 45,
//           borderRadius: 20,
//         }}
//         // imageLoadingColor="white"
//         //change here yourself
//         onCurrentImagePressed={index => alert(index + 1)}
//         paginationBoxVerticalPadding={10}
//       />
//     </View>
//   );
// };

// export default Slider;

// const styles = StyleSheet.create({
//   Slider: {
//     marginTop: 10,
//     resizeMode: 'contain',
//     height: 150,
//     width: '100%',
//     paddingVertical: 40,
//   },
// });


import { Alert, StyleSheet, Text, View, VirtualizedList } from 'react-native';
import React, { memo } from 'react';
import { SliderBox } from 'react-native-image-slider-box';

const SliderItem = memo(({ image }) => {
  return (
    <SliderBox
      style={styles.Slider}
      images={[image]}
      dotColor="white"
      inactiveDotColor="silver"
      autoplay={true}
      circleLoop={true}
      autoplayInterval={3000}
      dotStyle={{
        height: 10,
        width: 20,
        borderRadius: 20,
      }}
      onCurrentImagePressed={(index) => alert(index + 1)}
      paginationBoxVerticalPadding={10}
    />
  );
});

const Slider = () => {
  const image = [
    require('../assets/images/t.jpeg'),
    require('../assets/images/s1.jpeg'),
    require('../assets/images/s2.jpeg'),
    require('../assets/images/s3.jpeg'),
    require('../assets/images/t.jpeg'),
  ];

  const keyExtractor = (item, index) => index.toString();

  const getItemCount = () => image.length;

  const getItem = (data, index) => {
    return data[index];
  };

  const renderItem = ({ item }) => {
    return <SliderItem image={item} />;
  };

  return (
    <View>
      <VirtualizedList
        data={images}
        getItemCount={getItemCount}
        getItem={getItem}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  Slider: {
    marginTop: 10,
    resizeMode: 'contain',
    height: 150,
    width: '100%',
    paddingVertical: 40,
  },
});
