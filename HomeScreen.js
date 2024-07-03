import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProductItem from './ProductItem';
import styles from './styles';

const PRODUCTS = [
  { id: '1', name: 'Office Wear', description: 'reversible angora cardigan', price: 120, image: require('./assets/dress1.png') },
  { id: '2', name: 'Black', description: 'reversible angora cardigan', price: 120, image: require('./assets/dress2.png') },
  { id: '3', name: 'Church Wear', description: 'reversible angora cardigan', price: 120, image: require('./assets/dress3.png') },
  { id: '4', name: 'Lamerei', description: 'reversible angora cardigan', price: 120, image: require('./assets/dress4.png') },
  { id: '5', name: '21WN', description: 'reversible angora cardigan', price: 120, image: require('./assets/dress5.png') },
  { id: '6', name: 'Lopo', description: 'reversible angora cardigan', price: 120, image: require('./assets/dress6.png') },
  { id: '7', name: '21WN1', description: 'reversible angora cardigan', price: 120, image: require('./assets/dress7.png') },
];

const HomeScreen = ({ navigation }) => {
  const [cart, setCart] = useState([]);

  const addToCart = async (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    await AsyncStorage.setItem('cart', JSON.stringify(newCart));
  };

  useEffect(() => {
    const loadCart = async () => {
      const savedCart = await AsyncStorage.getItem('cart');
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    };
    loadCart();
  }, []);

  const renderItem = ({ item }) => (
    <ProductItem item={item} addToCart={addToCart} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={require('./assets/Menu.png')} style={styles.headerIcon} />
        </TouchableOpacity>
        <Image source={require('./assets/Logo.png')} style={styles.headerTitleImage} />
        <View style={styles.headerRight}>
          <TouchableOpacity>
            <Image source={require('./assets/Search.png')} style={styles.headerIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('./assets/shoppingBag.png')} style={styles.headerIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>OUR STORY</Text>
        <View style={styles.sectionIcons}>
          <TouchableOpacity>
            <Image source={require('./assets/Listview.png')} style={styles.headerIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('./assets/Filter.png')} style={styles.headerIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={PRODUCTS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
      <TouchableOpacity style={styles.cartButton} onPress={() => navigation.navigate('Cart')}>
        <Image source={require('./assets/add_circle.png')} style={styles.cartIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
