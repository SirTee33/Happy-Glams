import React from 'react';
import "./ProductItems.css"
import { Link } from 'react-router-dom';

const ProductItems = (props) => {
  return (
    <Link to={`/product/${props.id}`} className='p-item-link'>
      <div className="p-item">
        <img src={props.image} alt="" />
        <p>{props.name}</p>
        <div className="p-item-prices">
          <div className="p-item-price-new">
          {props.new_price}
          </div>
          <div className="p-item-price-old">
          {props.old_price}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItems;

