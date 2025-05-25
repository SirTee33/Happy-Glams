import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { useParams } from 'react-router-dom';
import ProductData from '../Assets/ProductData';
import { CartContext } from '../CartContext/CartContext';
import Loader from "../Loader/Loader";

import './ProductDisplay.css';
import StarIcon from "../Videos & Images/star icon.png"
import StarDullIcon from "../Videos & Images/star dull icon.jpeg"
//import DescriptionBox from '../DescriptionBox/DescriptionBox';
const ProductDisplay = () => {
  
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true); // Set loading state
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    // Simulate an API call or product lookup
    setTimeout(() => {
      const foundProduct = ProductData.find(item => item.id === parseInt(id)); // Find the product from local data
      setProduct(foundProduct);
      setLoading(false); // Stop loading once the product is found
    }, 1000); // Delay to simulate loading
  }, [id]);

  if (loading) {
    return <Loader />; // Show the loader while loading
  }

  if (!product) {
    return <div className="not-found">Product not found.</div>; // Show "Product not found" message if no product found
  }
return (
    <div className="p-dis">
      <div className="p-dis-left">
        <div className="p-dis-img-list">
          <img src={product.image} alt="" />  
          <img src={product.image} alt="" />  
          <img src={product.image} alt="" />  
          <img src={product.image} alt="" />  
        </div>
        <div className="p-dis-img">
          <img className='p-dis-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="p-dis-right">
        <h1>{product.name}</h1>
        <div className="p-dis-right-stars">
          <img src={StarIcon} alt="" />
          <img src={StarIcon} alt="" />
          <img src={StarIcon} alt="" />
          <img src={StarIcon} alt="" />
          <img src={StarDullIcon} alt="" />
          <p>(122)</p>
        </div>
        <div className="p-dis-right-prices">
          <div className="p-dis-right-price-old">₦{product.old_price.toLocaleString()}</div>
          <div className="p-dis-right-new">₦{product.new_price.toLocaleString()}</div>
        </div>
        <div className="p-dis-right-desc">
          A very good product meant for your lovely skill to nourish your skin and beautify your entire body. 
        </div>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
        <p className='p-dis-right-categ'><span>Category :</span>Brush, LipStick, Crop Top</p>
        <p className='p-dis-right-categ'><span>Category :</span>Modern, Latest</p>
        <Link to="/products" button className='back-button'>Back to Products</Link>
      </div>
    </div>
  );
};
export default ProductDisplay;

/*
import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CartContext } from '../CartContext/CartContext';
import './ProductDisplay.css';
import StarIcon from "../Videos & Images/star icon.png";
import StarDullIcon from "../Videos & Images/star dull icon.jpeg";

const ProductDisplay = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`http://localhost:3004/products/${id}`)
      .then(res => {
        if (!res.ok) {
          throw new Error("Product not found");
        }
        return res.json();
      })
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to load product:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading product...</div>;
  if (!product) return <div>Product not found.</div>;

  return (
    <div className="p-dis">
      <div className="p-dis-left">
        <div className="p-dis-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="p-dis-img">
          <img className='p-dis-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="p-dis-right">
        <h1>{product.name}</h1>
        <div className="p-dis-right-stars">
          <img src={StarIcon} alt="" />
          <img src={StarIcon} alt="" />
          <img src={StarIcon} alt="" />
          <img src={StarIcon} alt="" />
          <img src={StarDullIcon} alt="" />
          <p>(122)</p>
        </div>
        <div className="p-dis-right-prices">
          <div className="p-dis-right-price-old">₦{product.old_price?.toLocaleString()}</div>
          <div className="p-dis-right-new">₦{product.new_price?.toLocaleString()}</div>
        </div>
        <div className="p-dis-right-desc">
          A very good product meant for your lovely skill to nourish your skin and beautify your entire body.
        </div>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
        <p className='p-dis-right-categ'><span>Category :</span> {product.category}</p>
        <Link to="/products" className='back-button'>Back to Products</Link>
      </div>
    </div>
  );
};

export default ProductDisplay;
*/
