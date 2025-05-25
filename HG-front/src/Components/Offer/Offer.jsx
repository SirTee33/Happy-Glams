import React from 'react';
import "./Offer.css"
import offer from "../Videos & Images/offerimg.png"
import { Link } from 'react-router-dom';
const Offer = () => {
  return (
    <div className='offer'>
      <div className="offer-left">
        <h1>Glams That Turns Heads</h1>
        <h4>Professional Makeup Services for All Occasions</h4>
        <p>Book Now and Let Your Beauty Shine</p>
        <Link to="/contact" button className='book-now-btn'>Book Now</Link>
      </div>
      <div className="offer-right">
        <img src={offer} alt="" />
      </div>
    </div>
  );
};
export default Offer;