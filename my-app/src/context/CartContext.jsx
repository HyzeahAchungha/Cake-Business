import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item) => {
    setCartItems(prev => [...prev, item]);
    setIsCartOpen(true);
  };

  const removeFromCart = (cartId) => {
    setCartItems(prev => prev.filter(item => item.cartId !== cartId));
  };

  return (
    <CartContext.Provider value={{ cartItems, isCartOpen, setIsCartOpen, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};