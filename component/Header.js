import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';

const Header = () => {
  const [cartItems, setCartItems] = useState(0);

  const cartData = useSelector(state => state.cart);

  useEffect(() => {
    setCartItems(cartData.length);
  }, [cartData]);

  return (
    <View style={styles.container}>
      <Text style={styles.item}>{cartItems}</Text>
      <TouchableOpacity style={styles.cart}>
        <AntDesign name="shoppingcart" size={34} color="#F1F0E8" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'flex-end',
    backgroundColor: '#5C5470',
  },
  item: {
    position: 'absolute',
    bottom: 20,
    right: 27,
    fontSize: 9,
    color: '#F1F0E8',
  },
  cart: {
    position: 'relative',
    marginRight: 15,
  },
});
