import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import CustomTextInput from '../component/CustomTextInput';
import Button from '../component/Button';
import { useDispatch } from 'react-redux';
import { addAddress } from '../redux/action/Action';

const AddAddress = () => {
  const [city, setCity] = useState('');
  const [building, setBuilding] = useState('');
  const [pin, setPin] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        {/* <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            source={require('../assets/images/back.png')}
            style={styles.btnImg}
          />
        </TouchableOpacity> */}
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            source={require('../assets/images/back.png')}
            style={styles.btnImg}
          />
        </TouchableOpacity>
      </View>
      <CustomTextInput
        placeholder={'Enter City Name'}
        icon={require('../assets/images/smart-city.png')}
        value={city}
        onChangeText={setCity}
      />
      <CustomTextInput
        placeholder={'Enter Building Name'}
        icon={require('../assets/images/building.png')}
        value={building}
        onChangeText={setBuilding}
      />
      <CustomTextInput
        placeholder={'Enter Pincode'}
        icon={require('../assets/images/location.png')}
        value={pin}
        // keyboardType={'number-pad'}
        onChangeText={setPin}
      />
      <Button
        title={'Save Address'}
        bgColor={'#000'}
        textColor={'#fff'}
        onPress={() => {
          if (city !== '' && building !== '' && pin !== '') {
            dispatch(
              addAddress({ city: city, building: building, pincode: pin }),
            );
            navigation.goBack();
          }
        }}
      />
    </View>
  );
};

export default AddAddress;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 70,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    // backgroundColor: 'red',
  },
  headerText: {
    color: '#000',
    fontWeight: '600',
    fontSize: 18,
    marginLeft: 15,
  },
  btn: {
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.3,
    padding: 5,
    borderRadius: 50,
    // tintColor:'black'
    // backgroundColor:'black'
  },
  image: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 30,
  },
  btnImg: {
    width: 24,
    height: 24,
    // tintColor:'red'
  },
});
