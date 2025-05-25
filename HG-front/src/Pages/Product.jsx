import React, { useState, useEffect } from 'react';
import "../Components/Styles/Product.css";
import ProductData from "../Components/Assets/ProductData";
import ProductItems from "../Components/ProductItems/ProductItems";
import offer from "../Components/Videos & Images/Mine1.png";
//import DropIcon from "../Components/Videos & Images/drop-down-25.png";

const categories = ["All", "Brush", "Lipstick", "Foundation", "Eyelashes", "Palette", "Cleanser"];

const Product = () => {
  const [visibleCount, setVisibleCount] = useState(8);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredData = selectedCategory === "All"
    ? ProductData
    : ProductData.filter(product => product.category === selectedCategory);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= fullHeight - 100) {
      setVisibleCount(prev => Math.min(prev + 8, filteredData.length));
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [filteredData]);

  useEffect(() => {
    setVisibleCount(8); // reset when category changes
  }, [selectedCategory]);

  return (
    <div className="p">
      <div className='p-offer'>
        <div className="p-offer-left">
          <h1>Our Beauty Products</h1>
          <h2>Flawless Looks Start Here!</h2>
          <p>From radiant foundations to stunning lip colors, our collection is crafted to
            elevate your beauty game.
          </p>
        </div>
        <div className="p-offer-right">
          <img src={offer} alt="" className='p-offer-pic' />
        </div>
      </div>

      <div className="p-category-sort">
        <p>
          <span>Showing 1-{visibleCount}</span> out of {filteredData.length} products
        </p>
        <div className="p-category-filter">
          <label>Filter: </label>
          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="p-l">
        {filteredData.slice(0, visibleCount).map((product, i) => (
          <ProductItems
            key={i}
            id={product.id}
            name={product.name}
            image={product.image}
            
          />
        ))}
      </div>

      {visibleCount >= filteredData.length && (
        <p className="p-end-message">You've reached the end!</p>
      )}
    </div>
  );
};

export default Product;
