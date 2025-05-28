import React, { useContext, useState } from 'react';
import { CartContext } from '../Components/CartContext/CartContext';
import { Link } from 'react-router-dom';
import '../Components/Styles/CartPage.css';
import RemoveIcon from "../Components/Videos & Images/removeicon.png"
const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useContext(CartContext);
  const [location, setLocation] = useState('');
  const [shippingFee, setShippingFee] = useState(0);

  // Add location handler
  const handleLocationChange = (e) => {
    const selectedLocation = e.target.value;
    setLocation(selectedLocation);

    // Example shipping rates based on location
    if (selectedLocation === "Lagos") {
      setShippingFee(2000);
    } else if (selectedLocation === "Abuja") {
      setShippingFee(3000);
    } else {
      setShippingFee(5000);
    }
  };



  // Handle quantity change
  const handleQuantityChange = (id, quantity) => {
    if (quantity <= 0) return; // Don't allow quantity to be zero or negative
    updateQuantity(id, quantity);
  };

  return (
    <div className="cart-page">
      <div className="cart-items-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {cart.length === 0 ? (
        <p className='empty-cart'>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <p>{item.name}</p>
            <p>₦{item.new_price.toLocaleString()}</p>
            <div className="cart-item-quantity">
              <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                min="1"
              />
              <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
            </div>
            <p>₦{(item.new_price * item.quantity).toLocaleString()}</p>
            {/*<button onClick={() => removeFromCart(item.id)}>Remove</button>*/}
            <img onClick={() => removeFromCart(item.id)}src={RemoveIcon} alt="" className='remove-icon' />
          </div>
        ))}
        </div>
        
      )}
      <select value={location} onChange={handleLocationChange} required>
        <option value="">Select Location</option>
        <option value="Lagos">Lagos</option>
        <option value="Abuja">Abuja</option>
        <option value="Others">Others</option>
      </select>

      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>₦{getTotalPrice().toLocaleString()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping ({location})</p>
              <p>₦{shippingFee.toLocaleString()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>₦{(getTotalPrice() + + shippingFee).toLocaleString()}</h3>
            </div>
          </div>
          <div className="checkout-add">
            <Link to="/checkout" className="checkout-button">Proceed to Checkout</Link>
            <Link to="/products" className="add-cart-button">Add to Cart</Link>
          </div>
        </div>
          {/* <div className="cartitems-promocode">
          <p>Got a Promo Code? Use it Here!</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promo code"/>
            <button>Submit</button>
          </div>
        </div> */}
      </div>
      
    </div>
  );
};
export default CartPage;
