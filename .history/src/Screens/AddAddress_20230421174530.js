import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const AddAddress = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.goBack();
          }}>
          <Image source={require('../assets/images/back.png')} 
            style={styles.btnImg}
          />
        </TouchableOpacity>
      </View>
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
    borderWidth: .3,
    padding: 5,
    borderRadius: 50,
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
  },
});
