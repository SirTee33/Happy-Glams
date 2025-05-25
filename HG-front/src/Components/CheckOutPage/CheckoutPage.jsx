import React, { useContext, useState } from 'react';
import { CartContext } from '../CartContext/CartContext';
import './CheckoutPage.css';

const CheckoutPage = () => {
  const { _cart, getTotalPrice } = useContext(CartContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && address) {
      alert('Order placed successfully!');
      // Optionally clear cart after successful order
    } else {
      alert('Please fill out all fields');
    }
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Shipping Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button type="submit">Place Order</button>
      </form>
      <div className="checkout-summary">
        <h3>Total: ₦{getTotalPrice().toLocaleString()}</h3>
      </div>
    </div>
  );
};

export default CheckoutPage;
