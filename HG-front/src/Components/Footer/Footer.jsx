import React from "react";
import "./Footer.css";
import facebookIcon from "../Videos & Images/facebook icon.png"
import whatsappIcon from "../Videos & Images/whatapp.png"
import instagramIcon from "../Videos & Images/Instagram icon.jpeg"
import tiktokIcon from "../Videos & Images/tiktok icon.png"
import xIcon from "../Videos & Images/X icon.png"
function Footer() {
  return (
    <div className="footer">
      <div className="footer-h2-h1">
        <h1>HG</h1>
        <h2>Beauty</h2>
      </div>
      <div className="footer-social-icon">
        <div className="footer-icon-row">
          <div className="footer-icons-container">
            <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener  noreferrer">
              <img src={instagramIcon} alt="Instagram" className="social-icon" />
            </a>
            <a href="https://www.facebook.com/John Taiwo T.Baba" target="_blank" rel="noopener noreferrer">
              <img src={facebookIcon} alt="Facebook" className="social-icon" />
            </a>
            <a href="https://www.x.com/TaiwoJohn" target="_blank" rel="noopener noreferrer">
              <img src={xIcon} alt="X" className="social-icon" />
            </a>
            <a href="https://www.tiktok.com/@johnteey" target="_blank" rel="noopener noreferrer">
              <img src={tiktokIcon} alt="Tiktok" className="social-icon" />
            </a>
            <a href="https://wa.me/2348136190222" target="_blank" rel="noopener noreferrer">
              <img src={whatsappIcon} alt="WhatsApp" className="social-icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>&copy; {new Date().getFullYear()} All Right Reserved</p>
      </div>
    </div>
  );
}

export default Footer