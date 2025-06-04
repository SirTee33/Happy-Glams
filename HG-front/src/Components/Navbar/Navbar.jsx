import "./Navbar.css";
import React, { useContext, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { CartContext } from '../CartContext/CartContext';
//import CartIcon from "../CartIcon/CartIcon";
import cart_icon from "../Videos & Images/cartcount.png";
import { Link } from "react-router-dom";
import logo from '../Videos & Images/mine logo new 1.png'

function Navbar() {
    const [menu, setMenu] = useState("home");
    const [isOpen, setIsOpen] = useState(false);
    const {getTotalItems}= useContext(CartContext);
    

  return(
    <div className="navbar">
      <div className="h2-h1">
        <img src={logo} alt="" />
      </div>
      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`nav-menu ${isOpen ? "open" : ""}`}>
        <li onClick={()=>{setMenu("home"); setIsOpen(false)}}><Link style={{textDecoration: "none"}} to="/">HOME</Link>{menu==="home"?<hr/>:<></>}
        </li>
        <li onClick={()=>{setMenu("services"); setIsOpen(false)}}><Link style={{textDecoration: "none"}} to="/services">SERVICES</Link>{menu==="services"?<hr/>:<></>}
        </li>
        <li onClick={()=>{setMenu("gallery"); setIsOpen(false)}}><Link style={{textDecoration: "none"}} to="/gallery">GALLERY</Link>{menu==="gallery"?<hr/>:<></>}
        </li>
        <li onClick={()=>{setMenu("products"); setIsOpen(false)}}><Link style={{textDecoration: "none"}} to="/products">PRODUCTS</Link>{menu==="products"?<hr/>:<></>}
        </li>
        <li onClick={()=>{setMenu("contact"); setIsOpen(false)}}><Link style={{textDecoration: "none"}} to="/contact">CONTACT</Link>{menu==="contact"?<hr/>:<></>}
        </li>
      </ul>
        
          {/* cart icon */}
          <div className="cart-icon-wrapper" style={{ position: "relative" }}>
            <Link to="/cart"><img src={cart_icon} alt="cart icon" /></Link>
            <div className="nav-cart-count">      {getTotalItems()}
            </div>
          </div>
        {/* </div> */}
        <div className="mobile-float-buttons">
          <Link to="/cart">
            <div className="float-btn cart-float">
              <FiShoppingCart size={18} />
              <span>{getTotalItems()}</span>
            </div>
          </Link> 
        </div> 
    </div>
  )
}

export default Navbar