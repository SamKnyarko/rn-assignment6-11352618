# Shopping Cart App

## Overview
This is a simple Shopping Cart application built with React Native. It allows users to browse a list of products, add them to their cart, and manage the cart contents. The app also maintains the cart state using AsyncStorage for persistent storage.

## Features
- Browse products
- Add products to cart
- Remove products from cart
- View cart and total amount

## Installation

### Prerequisites
- Node.js
- npm or yarn
- React Native CLI
- Xcode (for iOS development)
- Android Studio (for Android development)
- Expo go

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/SamKnyarko/rn-assignment6-11352618.git
   cd myapp
   ```

2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

3. Start the Metro bundler:
   ```sh
   npx expo start
   ```

4. Run the app on your emulator or device:
   ```sh
   npx react-native run-ios
   # or
   npx react-native run-android
   # or
   Take a picture of your qr code on your IDE
   ```



## Screenshot Of Screens

### HomeScreen


### CartScreen


## Styles
The `styles.js` file contains the styles used throughout the app, ensuring a consistent look and feel.

## Persistent Storage
The app uses `AsyncStorage` to save and load the cart contents, providing a persistent shopping cart experience even when the app is closed or refreshed.



## Usage

### Adding Products to Cart
- Navigate to the home screen.
- Click the "Add to Cart" button on any product.
- The product will be added to the cart and saved in `AsyncStorage`.

### Viewing Cart
- Click the cart icon to navigate to the cart screen.
- View the list of products in your cart and the total price.

### Removing Products from Cart
- Click the "Remove" button on any product in the cart.
- The product will be removed from the cart and the state will be updated in `AsyncStorage`.

