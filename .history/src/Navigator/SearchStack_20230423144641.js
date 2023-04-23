import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import { deleteAddress } from '../redux/action/Action';
let addressList = [];
const Add = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const addressList = useSelector(state => state.AddressReducers);
  const dispatch = useDispatch();
  console.log(addressList);
  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Address</Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.navigate('AddAddress');
          }}>
          <Text onPress={()=>{
        console.log('im am hello')
      }}>hello</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={addressList}
        renderItem={({item, index}) => {
          return (
            <View style={styles.item}>
              <View>
                <Text style={styles.itemText}>{'City :' + item.city}</Text>
                <Text style={styles.itemText}>
                  {'Building :' + item.building}
                </Text>
                <Text style={styles.itemText}>
                  {'PinCode :' + item.pincode}
                </Text>
              </View>
              <TouchableOpacity
                style={{borderWidth: 0.2, padding: 7, marginRight: 20}}
                onPress={() => {
                    dispatch(deleteAddress(index));
                    console.warn('press');
                }}
                >
                <Text>Delete Address</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    
    </View>
  );
};

export default Add;

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
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    padding: 5,
    borderRadius: 10,
  },
  image: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 30,
  },
  item: {
    width: '100%',
    // height: 60,
    borderWidth: 0.2,
    borderColor: '#828e',
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    marginLeft: 20,
    marginBottom: 10,
  },
});
