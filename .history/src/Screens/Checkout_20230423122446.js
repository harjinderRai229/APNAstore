import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const Checkout = () => {
  const cartData = useSelector(state => state.Reducers);
  const getTotal = () => {
    let tempTotal = 0
    cartData.map((item) => {
      // tempTotal+=item.quantity*item.price
      tempTotal += item.price
    });
    return tempTotal
  }
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{ flex: 1 }}>
        <View>
          <FlatList
            data={cartData}
            renderItem={({ item, index }) => {
              return (
                <View style={styles.checkoutItem}>
                  <Image
                    source={item.image}
                    style={styles.checkoutImage}
                  />
                  <View style={{ padding: 10 }}>
                    <Text style={{ fontSize: 18 }}>
                      {item.name}
                    </Text>
                    <Text style={{ marginTop: 10 }}>
                      {'$' + item.price}
                    </Text>
                  </View>
                </View>
              )
            }}
          />
        </View>
        <View
          style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' , paddingHorizontal:20, borderTopWidth:.5,marginTop:30,}}
        >
          <Text>
            Total :
          </Text>
          <Text>{'$' + getTotal()}</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Checkout

const styles = StyleSheet.create({
  checkoutItem: {
    // flex: 1,
    flexDirection: 'row',
    width: '100%',
    height: 70,
  },
  checkoutImage: {
    width: 70,
    height: 70,
    marginLeft: 10,
  },
})