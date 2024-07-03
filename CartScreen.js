import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';

const CartScreen = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const loadCart = async () => {
      const savedCart = await AsyncStorage.getItem('cart');
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);
        setCart(parsedCart);
        calculateTotal(parsedCart);
        console.log('Loaded cart:', parsedCart);
      }
    };
    loadCart();
  }, []);

  const removeFromCart = async (product) => {
    const newCart = cart.filter((item) => item.id !== product.id);
    setCart(newCart);
    await AsyncStorage.setItem('cart', JSON.stringify(newCart));
    calculateTotal(newCart);
    console.log('Removed from cart:', product);
    console.log('Current cart:', newCart);
  };

  const calculateTotal = (cartItems) => {
    const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);
    setTotal(totalAmount);
  };

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={item.image} style={styles.cartImage} />
      <View style={styles.cartDetails}>
        <Text style={styles.cartName}>{item.name}</Text>
        <Text style={styles.cartDescription}>{item.description}</Text>
        <Text style={styles.cartPrice}>${item.price}</Text>
        <TouchableOpacity style={styles.removeButton} onPress={() => removeFromCart(item)}>
          <Image source={require('./assets/remove.png')} style={styles.removeButtonIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./assets/Logo.png')} style={styles.headerTitleImage} />
        <TouchableOpacity style={styles.headerRight}>
          <Image source={require('./assets/Search.png')} style={styles.headerIcon} />
        </TouchableOpacity>
      </View>
      <Text style={styles.sectionTitle}>My Cart</Text>
      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Est. Total: ${total}</Text>
      </View>
    </View>
  );
};

export default CartScreen;
