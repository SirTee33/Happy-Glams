import React from 'react';
import "./Testimonial.css"
import testimonial from "../Assets/Testimonial_data"
import Testimonial_item from '../Testimonial_item/Testimonial_item';
const Testimonial = () => {
  
  return (
    <div className="testimonial">
        <h1>What Our Clients Says</h1>
        <hr />
        <div className="testimonial-list">
        {testimonial.map((review,i) => {
          return <Testimonial_item key={i} id={review.id} name={review.name} view={review.view} image={review.image} />
        })}
          
        </div>
    </div>
  );
};
export default Testimonial;