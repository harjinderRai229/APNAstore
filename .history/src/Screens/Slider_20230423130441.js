// /* eslint-disable react-native/no-inline-styles */
// import {StyleSheet, View} from 'react-native';
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
//         imageLoadingColor="white"
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

import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import { SliderBox } from "react-native-image-slider-box";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        "https://source.unsplash.com/1024x768/?tree",
        // require('./assets/images/girl.jpg'),
      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <SliderBox
          images={this.state.images}
          onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});