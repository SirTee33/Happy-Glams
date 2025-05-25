import React, { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';
import { Link } from 'react-router-dom';
import './CartIcon.css'; 
import CartCount from "../Videos & Images/cartcount.png"

const CartIcon = () => {
  const { getTotalItems } = useContext(CartContext); // Get total items in the cart
  const totalItems = getTotalItems();

  return (
    <Link to="/cart" className="cart-icon">
      <img src={CartCount} alt="Cart" />
      {totalItems > 0 && (
        <span className="cart-item-count">{totalItems}</span>
      )}
    </Link>
  );
};

export default CartIcon;
