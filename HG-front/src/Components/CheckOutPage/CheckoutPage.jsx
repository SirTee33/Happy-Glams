import React, { useContext, useState, useRef } from 'react';
import { toast } from 'react-toastify';
import { CartContext } from '../CartContext/CartContext';
import emailjs from 'emailjs-com';
import './CheckoutPage.css';

const CheckoutPage = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && email && address) {
      emailjs.sendForm(
        'service_xkhw0pd', //your_service_id,
        'template_zwpk5ts', //template id 
        formRef.current,
        'yw64RDaMkr5adaWgP' //your_public_key
      )
      .then(() => {
        toast.success('Order placed successfully!');
        // alert('Order placed successfully!');
        setName('');
        setEmail('');
        setAddress('');
        formRef.current.reset();
        clearCart();
      })
      .catch((error) => {
        console.error('Email error:', error);
        toast.error('Failed to place order.');
        // alert('Failed to place order.');
      });
    } else {
      alert('Please fill out all fields');
    }
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <form ref={formRef} onSubmit={handleSubmit}>
        <input
          type="text"
          name="user_name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          name="user_address"
          placeholder="Shipping Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />

        {/* Hidden input to send cart data */}
        <textarea
          name="cart_items"
          value={cart.map(item =>
            `${item.name} (x${item.quantity}) - ₦${item.new_price * item.quantity}`
          ).join('\n')}
          hidden
          readOnly
        />

        <input
          type="text"
          name="total"
          value={`₦${getTotalPrice().toLocaleString()}`}
          hidden
          readOnly
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
