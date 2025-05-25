import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();
const API_URL = 'https://happy-glams-backend.onrender.com/cart';

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Fetch cart from API on initial render
  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setCart(data);
    } catch (err) {
      console.error("Failed to load cart:", err);
    }
  };

  const addToCart = async (product) => {
    try {
      const existingItem = cart.find(item => item.productId === product.id);

      if (existingItem) {
        const updatedItem = { ...existingItem, quantity: existingItem.quantity + 1 };
        await fetch(`${API_URL}/${existingItem.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updatedItem),
        });
        setCart(cart.map(item => item.id === existingItem.id ? updatedItem : item));
      } else {
        const { id, ...rest } = product;
        const newItem = { ...rest, productId: id, quantity: 1 };
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newItem),
        });
        const addedItem = await response.json();
        setCart([...cart, addedItem]);
      }
    } catch (error) {
      console.error('Failed to add item to cart:', error);
      alert('Failed to add item to cart.');
    }
  };

  const removeFromCart = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });
      setCart(cart.filter(item => item.id !== id));
    } catch (error) {
      console.error('Failed to remove item from cart:', error);
      alert('Failed to remove item.');
    }
  };

  const updateQuantity = async (id, quantity) => {
    try {
      const item = cart.find(item => item.id === id);
      if (!item) return;

      const updatedItem = { ...item, quantity };
      await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedItem),
      });
      setCart(cart.map(item => item.id === id ? updatedItem : item));
    } catch (error) {
      console.error('Failed to update quantity:', error);
      alert('Failed to update quantity.');
    }
  };

  const getTotalItems = () =>
    cart.reduce((total, item) => total + item.quantity, 0);

  const getTotalPrice = () =>
    cart.reduce((total, item) => total + item.new_price * item.quantity, 0);

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      getTotalItems,
      getTotalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
};
