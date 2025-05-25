import React from 'react';
import "./Services.css"
import serviceData from "../Assets/Service_data";
import ServiceItem from '../ServiceItems/ServiceItem';
const Services = () => {
  return (
    <div className="services">
      <h2>Our Makeup Services</h2>
      <hr />
      <div className="services-list">
        {serviceData.map((service,i) => {
          return <ServiceItem key={i} id={service.id} title={service.title} image={service.image} description={service.description} />
        })}
      </div>
    </div>
  );
};

export default Services;
