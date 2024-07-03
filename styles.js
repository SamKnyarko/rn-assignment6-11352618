// styles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
      },
      headerTitleImage: {
        width: 150,
        height: 50,
        resizeMode: 'contain',
      },
      headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      headerIcon: {
        width: 24,
        height: 24,
        marginHorizontal: 5,
      },
      sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginVertical: 10,
      },
      sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      sectionIcons: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      row: {
        justifyContent: 'space-between',
        marginHorizontal: 10,
      },
      cartButton: {
        position: 'absolute',
        bottom: 30,
        right: 30,
        backgroundColor: '#',
        borderRadius: 30,
        padding: 10,
      },
  productItem: {
    flex: 1,
    margin: 8,
    padding: 16,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    alignItems: 'center',
  },
  productImage: {
    width: 150,
    height: 200,
    marginBottom: 8,
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginVertical: 4,
  },
  productPrice: {
    fontSize: 16,
    color: '#e74c3c',
    marginVertical: 4,
  },
  addButton: {
    width: 24,
    height: 24,
    tintColor: '#000000',
    
  },
  addIcon: {
    width: 24,
    height: 24,
  },
  cartIcon: {
    width: 24,
    height: 24,
  },
  cartItem: {
    flexDirection: 'row',
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    alignItems: 'center',
  },
  cartImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginRight: 16,
  },
  cartDetails: {
    flex: 1,
  },
  cartName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cartDescription: {
    fontSize: 14,
    color: '#666',
    marginVertical: 4,
  },
  cartPrice: {
    fontSize: 16,
    color: '#e74c3c',
    marginVertical: 4,
  },
  removeButton: {
    backgroundColor: '#ff6347',
    borderRadius: 90,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
  },
  totalContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
