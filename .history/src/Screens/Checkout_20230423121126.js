import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const Checkout = () => {
  const cartData = useSelector(state => state.Reducers);
  return (
    <SafeAreaView>
      <View style={{ flex: 1 }}>
        <FlatList
          data={cartData}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.checkoutItem}>
                <Image
                  source={item.image}
                  style={styles.checkoutImage}
                />
                <View style={{padding}}>
                  <Text>
                    {item.name}
                  </Text>
                  <Text>
                    {item.price}
                  </Text>
                </View>
              </View>
            )
          }}

        />

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