import React from 'react';
import { Dimensions, Image, View } from 'react-native';
import Carousel from 'react-native-auto-carousel';

const DEVICE_WIDTH = Dimensions.get('window').width;
const IMAGES = [
  'https://picsum.photos/id/1018/536/354',
  'https://picsum.photos/id/1015/536/354',
  'https://picsum.photos/id/1021/536/354',
];

const Main = () => {
  return (
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

export default Main;
