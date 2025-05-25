import React from 'react';
import "./Testimonial_item.css"
const Testimonial_item = (props) => {
  return (
    <div className="testimonial-item">
      <img src={props.image} alt="" />
      <p className='name'>{props.name}</p>
      <p className='view'>{props.view}😀</p>
    </div>
  );
};
export default Testimonial_item;