import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    setTotalPrice(totalPrice + item.price);
  };

  const removeItem = (item) => {
    const filteredItems = cartItems.filter((i) => i.id !== item.id);
    setCartItems(filteredItems);
    setTotalPrice(totalPrice - item.price);
  };

  const clearCart = () => {
    setCartItems([]);
    setTotalPrice(0);
  };

  const isInCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
  };

  const totalItems = cartItems.length;

  const generateOrder = () => {
    return {
      buyer: {
        name: "Leticia",
        email: "teste@gmail.com",
        phone: "(11)9999-9999",
      },
      item: cartItems.map(item => ({
        title: item.title,
        quantity: item.quantity,
        price: item.price,
        id: item.id,
      })),
      date: new Date(),
      total: totalPrice,
    }
  };

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      addToCart, 
      removeItem, 
      clearCart,
      isInCart,
      totalItems, 
      totalPrice,
      generateOrder,
    }}>
      {children}
    </CartContext.Provider>
  );
};