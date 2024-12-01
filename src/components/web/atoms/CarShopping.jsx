import React, { createContext, useState, useContext } from 'react';

const CarShopping = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  return (
    <CarShopping.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CarShopping.Provider>
  );
};

export const useCart = () => useContext(CarShopping);
