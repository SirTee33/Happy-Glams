import React from 'react';
import "../Components/Styles/ServicePage.css"
import servicePageData from "../Components/Assets/ServicePageData"
import ServiceItem from '../Components/ServiceItems/ServiceItem';

const ServicesPage = () => {
  
  return (
    <div className='service-page'>
      <h1>Unleash the Glam</h1>      
      <h3>Because Every Face Deserves to Glow!</h3>      
      <div className="service-desc">
        Enhance your natural beauty with our professional makeup services tailored to suit every occasions. We offer a variety of professional makeup services for every occasion!!!.
      </div>
      <div className="services-types">
        <div className="services-wrapper">
          <div className="services-offer">▶ MAKEUP FOR ALL EVENTS</div>
          <div className="services-offer">▶ BRIDAL HAIR STYLING</div>
          <div className="services-offer">▶ GELE TYING</div>
          <div className="services-offer">▶ SALES OF MAKEUP PRODUCTS</div>
          <div className="services-offer">▶ STUDIO & HOME SERVICE</div>
          <div className="services-offer">▶ MAKEUP TRAINING</div>
        </div>
      </div>
      <div className="services-page-list">
        {servicePageData.map((service,i) => {
          return <ServiceItem key={i} id={service.id} title={service.title} image={service.image} description={service.description} />
        })}
      </div>
      
    </div>
  );
};

export default ServicesPage;