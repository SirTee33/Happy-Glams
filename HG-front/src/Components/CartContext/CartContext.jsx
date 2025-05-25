/*
import React, { createContext, useState, useEffect } from 'react';

// Create Context
export const CartContext = createContext();
 
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage when the app starts
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Add item to cart
  const addToCart = (product) => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  // Update item quantity in cart
  const updateQuantity = (id, quantity) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity: quantity } : item
      )
    );
  };

  // Get total items in the cart
  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Calculate the total price
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.new_price * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, getTotalPrice, getTotalItems }}>
      {children}
    </CartContext.Provider>
  );
};
*/

import { createContext, useState, useEffect } from 'react';
export const CartContext = createContext();
const API_URL = 'http://localhost:3004/cart';

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Fetch cart from fake API
  useEffect(() => {
    fetchCart();
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setCart(data))
      .catch(err => console.error("Failed to load cart:", err));
  }, []);

  // Add to cart (or update if exists)
  const addToCart = async (product) => {
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
      const updatedItem = { ...existingItem, quantity: existingItem.quantity + 1 };
      await fetch(`${API_URL}/${existingItem.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedItem),
      });
    } else {
      const { id, ...rest } = product; // remove product id to let json-server create new one
      await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...rest, productId: id, quantity: 1 }), // store original product id
        });

    }

    // Refresh cart
    const res = await fetch(API_URL);
    const data = await res.json();
    setCart(data);
  };

  const fetchCart = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setCart(data);
  };
  
  // Remove from cart
  const removeFromCart = async (id) => {
    await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
      fetchCart();
    //setCart(cart.filter(item => item.id !== id));
  };

  // Update item quantity
  const updateQuantity = async (id, quantity) => {
    const item = cart.find(item => item.id === id);
    if (!item) return;

    const updatedItem = { ...item, quantity };
    await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedItem),
    });

    const updatedCart = cart.map(item =>
      item.id === id ? updatedItem : item
    );
    setCart(updatedCart);
  };

  const getTotalItems = () =>
    cart.reduce((total, item) => total + item.quantity, 0);

  const getTotalPrice = () =>
    cart.reduce((total, item) => total + item.new_price * item.quantity, 0);

  return (
    <CartContext.Provider value={{
      cart, addToCart, removeFromCart, updateQuantity, getTotalItems, getTotalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
};
