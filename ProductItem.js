// ProductItem.js
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

const ProductItem = ({ item, addToCart }) => {
  return (
    <View style={styles.productItem}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productDescription}>{item.description}</Text>
      <Text style={styles.productPrice}>${item.price}</Text>
      <TouchableOpacity style={styles.addButton} onPress={() => addToCart(item)}>
        <Image source={require('./assets/add_circle.png')} style={styles.addIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default ProductItem;
