import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {addToCart, removeFromCart} from './Redux/action';
import {useDispatch, useSelector} from 'react-redux';

const Product = props => {
  const [isAdded, setIsAdded] = useState(false);
  const {item} = props;
  const dispatch = useDispatch();

  const cartData = useSelector(state => state.cart);

  const handleAddToCart = item => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = item => {
    dispatch(removeFromCart(item.name));
  };

  useEffect(() => {
    const result = cartData.filter(elem => {
      return elem.name === item.name;
    });

    if (result.length) {
      setIsAdded(true);
    } else {
      setIsAdded(false);
    }
  }, [cartData]);

  return (
    <>
      <View style={styles.container}>
        <Image style={{width: 180, height: 180}} source={{uri: item.image}} />
        <View style={styles.detail}>
          <Text
            style={{
              fontSize: 16,
              color: '#26444D',
              fontFamily: 'Merriweather-Regular',
            }}>
            {item.name}
          </Text>
          <Text style={{fontSize: 12, color: '#26444D'}}>
            Color: {item.color}
          </Text>
          <Text style={{fontSize: 12, color: '#26444D'}}>
            Price: ${item.price}
          </Text>
          <View>
            {isAdded ? (
              <TouchableOpacity
                style={styles.inero}
                onPress={() => handleRemoveFromCart(item)}>
                <Text className="text-center uppercase text-xs text-slate-950">
                  Remove From Cart
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.inter}
                onPress={() => handleAddToCart(item)}>
                <Text className="text-center uppercase text-xs text-slate-950">
                  Add To Cart
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    paddingBottom: 4,
  },
  detail: {
    gap: 12,
    justifyContent: 'center',
    width: '100%',
  },
  inter: {
    borderWidth: 2,
    padding: 1,
    width: '22%',
    borderRadius: 2,
    elevation: 10,
    backgroundColor: 'skyblue',
    borderColor: 'skyblue',
  },
  outer: {
    // textTransform: 'uppercase',
    // textAlign: 'center',
    // color: 'black',
    // fontSize: 12,
  },
  inero: {
    borderWidth: 2,
    padding: 1,
    width: '33%',
    borderRadius: 2,
    elevation: 10,
    backgroundColor: '#F6635C',
    borderColor: '#F6635C',
  },
});
