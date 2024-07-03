import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from './HomeScreen';
import CartScreen from './CartScreen';

const Stack = createStackNavigator();

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const loadCartItems = async () => {
      const storedCartItems = await AsyncStorage.getItem('cartItems');
      if (storedCartItems) {
        setCartItems(JSON.parse(storedCartItems));
      }
    };

    loadCartItems();
  }, []);

  const addToCart = async (item) => {
    const updatedCartItems = [...cartItems, item];
    setCartItems(updatedCartItems);
    await AsyncStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const removeFromCart = async (item) => {
    const updatedCartItems = cartItems.filter(cartItem => cartItem.id !== item.id);
    setCartItems(updatedCartItems);
    await AsyncStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home">
          {props => <HomeScreen {...props} addToCart={addToCart} />}
        </Stack.Screen>
        <Stack.Screen name="Cart">
          {props => <CartScreen {...props} cartItems={cartItems} removeFromCart={removeFromCart} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
