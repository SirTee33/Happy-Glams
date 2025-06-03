import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { useParams } from 'react-router-dom';
import ProductData from '../Assets/ProductData';
import { CartContext } from '../CartContext/CartContext';
import Loader from "../Loader/Loader";
import './ProductDisplay.css';
import StarIcon from "../Videos & Images/star icon.png"
import StarDullIcon from "../Videos & Images/star dull icon.jpeg"


const ProductDisplay = () => {
  
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true); // Set loading state
  const { addToCart } = useContext(CartContext);
  const generateStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<img key={i} src={StarIcon} alt="star" />);
    } else if (rating >= i - 0.5) {
      stars.push(<img key={i} src={StarIcon} style={{ opacity: 0.5 }} alt="half-star" />);
    } else {
      stars.push(<img key={i} src={StarDullIcon} alt="dull-star" />);
    }
  }
  return stars;
};


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
        </div>
        <div className="p-dis-img">
          <img className='p-dis-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="p-dis-right">
        <h1>{product.name}</h1>
        <div className="p-dis-right-stars">
          <div className="p-dis-right-stars">
          {generateStars(product.rating)}
          <p>({product.reviews})</p>
        </div>

        </div>
        <div className="p-dis-right-prices">
          <div className="p-dis-right-price-old">₦{product.old_price.toLocaleString()}</div>
          <div className="p-dis-right-new">₦{product.new_price.toLocaleString()}</div>
        </div>
        <div className="p-dis-right-desc">
          A very good product meant for your lovely skill to nourish your skin and beautify your entire body. 
        </div>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
        <Link to="/products" button className='back-button'>⬅ Products</Link> 
      </div>
    </div>
  );
};
export default ProductDisplay;

