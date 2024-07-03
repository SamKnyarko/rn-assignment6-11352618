import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const CartItem = ({ item, removeFromCart }) => {
  return (
    <View style={styles.cartItem}>
      <Image source={item.image} style={styles.image} />
      <Text>{item.name}</Text>
      <Text>${item.price}</Text>
      <Button title="Remove from Cart" onPress={() => removeFromCart(item.id)} />
    </View>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 200,
  },
});

export default CartItem;
