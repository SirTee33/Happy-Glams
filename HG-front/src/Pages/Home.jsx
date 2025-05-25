import React from 'react';
import Hero from '../Components/Hero/Hero';
import Popular from '../Components/Popular/Popular';
import Services from '../Components/Services/Services';
import Testimonial from '../Components/Testimonial/Testimonial';
import Offer from '../Components/Offer/Offer';
const Home = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offer/>
      <Services/>      
      <Testimonial/>      
            
    </div>
  );
};

export default Home;