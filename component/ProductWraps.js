import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from './Header';
import Product from './Product';
import {useNavigation} from '@react-navigation/native';

const ProductWraps = () => {
  const navigation = useNavigation();
  const products = [
    {
      name: 'Samsung Zom-100',
      color: 'Ametha',
      price: 278,
      image:
        'https://media.croma.com/image/upload/v1681703224/Croma%20Assets/Communication/Mobiles/Images/272041_ywi7uw.png',
    },
    {
      name: 'Gomu Iphone',
      color: 'Golver',
      price: 1349,
      image:
        'https://media.croma.com/image/upload/v1662655636/Croma%20Assets/Communication/Mobiles/Images/261974_bp5oqh.png',
    },
    {
      name: 'Rasen Nokia',
      color: 'Cherry',
      price: 78,
      image:
        'https://media.croma.com/image/upload/v1683554600/Croma%20Assets/Communication/Mobiles/Images/263300_0_lgivuc.png',
    },
    {
      name: 'Vivo Getsu',
      color: 'Shadow',
      price: 245,
      image:
        'https://media.croma.com/image/upload/v1681133071/Croma%20Assets/Communication/Mobiles/Images/270433_vwf1fy.png',
    },
  ];
  return (
    <View style={styles.container}>
      <Header />
      <Button title="UserScreen" onPress={() => navigation.navigate('User')} />
      <ScrollView>
        {products.map(item => (
          <Product item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default ProductWraps;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
