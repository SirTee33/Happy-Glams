import React from 'react';
import "./ServiceItem.css"
const ServiceItem = (props) => {
  return (
    <div className="service-item">
      <img src={props.image} alt="" />
      <p className="title">{props.title}</p>
      <p className="description">{props.description}</p>
    </div>
  );
};
export default ServiceItem;