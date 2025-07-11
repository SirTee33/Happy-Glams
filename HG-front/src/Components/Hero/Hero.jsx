import React from 'react';
import "./Hero.css";
import Mine from "../Videos & Images/tope background.png"

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h1>PROFESSIONAL MAKEUP ARTIST</h1>
        <h2>Thank you for choosing</h2>
        <h1 className="glams">HAPPY GLAMS BEAUTY</h1>
        <div className='hero-desc'>
          Customer satisfaction is our ultimate priority, keep patronizing us and we will  keep improving our services to make your day whole.
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-path"></div>
        <img src={Mine} alt="" />
      </div>
    </div>
  );
};

export default Hero;