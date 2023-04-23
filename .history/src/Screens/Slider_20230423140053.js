/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, View} from 'react-native';
import React from 'react';
import {SliderBox} from 'react-native-image-slider-box';
import Carousel from 'react-native-auto-carousel';

const Slider = () => {
  const images = [
    require('../assets/images/t.jpeg'),
    require('../assets/images/s1.jpeg'),
    require('../assets/images/s2.jpeg'),
    require('../assets/images/s3.jpeg'),
    require('../assets/images/t.jpeg'),
  ];
  return (
    // <View>
    //   <SliderBox
    //     style={styles.Slider}
    //     images={images}
    //     dotColor="white"
    //     inactiveDotColor="silver"
    //     autoplay={true}
    //     circleLoop={true}
    //     autoplayInterval={3000}
    //     dotStyle={{
    //       height: 10,
    //       width: 20,
    //       // marginTop: 45,
    //       borderRadius: 20,
    //     }}
    //     imageLoadingColor="white"
    //     onCurrentImagePressed={index => alert(index + 1)}
    //     paginationBoxVerticalPadding={10}
    //   />
    // </View>
    <View style={{ flex: 1 }}>
    <Carousel
      data={IMAGES}
      renderItem={({ item }) => (
        <Image
          source={{ uri: item }}
          style={{
            height: '100%',
            width: DEVICE_WIDTH,
            resizeMode: 'cover',
          }}
        />
      )}
      sliderWidth={DEVICE_WIDTH}
      itemWidth={DEVICE_WIDTH}
      autoplay={true}
      loop={true}
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


// import React from 'react';
// import { Dimensions, Image, View } from 'react-native';
// import Carousel from 'react-native-auto-carousel';

// const DEVICE_WIDTH = Dimensions.get('window').width;
// const IMAGES = [
//   'https://picsum.photos/id/1018/536/354',
//   'https://picsum.photos/id/1015/536/354',
//   'https://picsum.photos/id/1021/536/354',
// ];

// const App = () => {
//   return (
    // <View style={{ flex: 1 }}>
    //   <Carousel
    //     data={IMAGES}
    //     renderItem={({ item }) => (
    //       <Image
    //         source={{ uri: item }}
    //         style={{
    //           height: '100%',
    //           width: DEVICE_WIDTH,
    //           resizeMode: 'cover',
    //         }}
    //       />
    //     )}
    //     sliderWidth={DEVICE_WIDTH}
    //     itemWidth={DEVICE_WIDTH}
    //     autoplay={true}
    //     loop={true}
    //   />
    // </View>
//   );
// };

// export default App;
