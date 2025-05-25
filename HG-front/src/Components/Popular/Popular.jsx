import React from 'react';
import "./Popular.css"
import product from "../Assets/data"
import Item from '../Item/Item';
const Popular = () => {
  return (
    <div className="popular">
      <h1>Our Makeup Products</h1>
      <hr />
      <div className="popular-list">
        {product.map((product,i) => {
          return <Item key={i} id={product.id} name={product.name} image={product.image} new_price={product.new_price} old_price={product.old_price}/>
        })}
       </div>
    </div>
  );
};

export default Popular;
          