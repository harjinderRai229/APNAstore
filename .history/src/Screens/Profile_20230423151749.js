import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = () => {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    const getImageData = async () => {
      const imageData = await AsyncStorage.getItem('IMAGE');
      setImageData(imageData);
    };

    getImageData();
  }, []);

  return (
    <View>
      {imageData ? (
        <Image
          source={{ uri: imageData }}
          style={{ width: 200, height: 200 }}
        />
      ) : (
        <Text>No image found.</Text>
      )}
    </View>
  );
};

export default ProfileScreen;
