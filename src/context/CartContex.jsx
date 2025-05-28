// src/contexts/CartContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import axiosInstance from '../api/axios';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCart = async () => {
    try {
      setIsLoading(true);
      const data = await axiosInstance.get("cart/");
      setCartItems(data.items);
    } catch (error) {
      console.error('Error fetching cart:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCart(); 
  }, []);

  const addToCart = async (id, quantity = 1) => {
    try {
      await axiosInstance.addToCart(id, quantity);
      await fetchCart();
    } catch (error) {
      console.error('Error adding to cart:', error);
      throw error;
    }
  };

  const updateQuantity = async (itemId, quantity) => {
    try {
      if (quantity <= 0) {
        await removeFromCart(itemId);
        return;
      }
      await axiosInstance.updateCartItem(itemId, quantity);
      await fetchCart();
    } catch (error) {
      console.error('Error updating quantity:', error);
      throw error;
    }
  };

  const removeFromCart = async (itemId) => {
    try {
      await axiosInstance.removeFromCart(itemId);
      await fetchCart();
    } catch (error) {
      console.error('Error removing from cart:', error);
      throw error;
    }
  };

  const cartTotal = cartItems.reduce(
    (total, item) => total + (item.price * item.quantity),
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isLoading,
        addToCart,
        removeFromCart,
        updateQuantity,
        cartTotal,
        fetchCart // Add this if you need to manually refresh the cart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};