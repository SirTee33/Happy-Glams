import React from "react";
import "./Footer.css";
import whatsappIcon from "../Videos & Images/whatapp.png"
import instagramIcon from "../Videos & Images/Instagram icon.jpeg"
import tiktokIcon from "../Videos & Images/tiktok icon.png"


function Footer() {
  return (
    <div className="footer">
      <div className="footer-social-icon">
        <div className="footer-icon-row">
          <div className="footer-icons-container">
            <a href="https://www.instagram.com/happy_glam1" target="_blank" rel="noopener  noreferrer">
              <img src={instagramIcon} alt="Instagram" className="social-icon" />
            </a>
            <a href="https://www.tiktok.com/@makeup_artist_insangoota" target="_blank" rel="noopener noreferrer">
              <img src={tiktokIcon} alt="Tiktok" className="social-icon" />
            </a>
            <a href="https://wa.me/2347033992717" target="_blank" rel="noopener noreferrer">
              <img src={whatsappIcon} alt="WhatsApp" className="social-icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p className="footer-copy">&copy; {new Date().getFullYear()} All Right Reserved</p>
      </div>
    </div>
  );
}

export default Footer