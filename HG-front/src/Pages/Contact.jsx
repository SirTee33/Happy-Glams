import React, { useState, useEffect } from 'react';
import "../Components/Styles/Contact.css"
import servicePageData from "../Components/Assets/ServicePageData"
import Phone from "../Components/Videos & Images/phone icon1.png"
import Email from "../Components/Videos & Images/email icon1.png"
import Address from "../Components/Videos & Images/address icon1.png"

const Contact = () => {
  const [contact, setContact] = useState([]);

  useEffect(() => {
    setContact(servicePageData);
  },[]);
  return (
    <div className='c'>
      <div className="c-bg">
      <div className="c-wrapper">
        <div className="c-left">
          <h2 className='c-title'>Contact Us for your Appointment & Inquiries</h2>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" /> +2347033992717, +2348024746657
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" /> happyglam@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" /> 1 Baba Festac Street, Ewupe, Singer B/Stop, Sango Ota, Ogun State.
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className='c-desc'>
            <b>How can we serve you the best?</b> Get in touch. We will surely put a smile on your face.
          </p>
        <section className='booking-section'> 
        <h2>Ready to Glow? Book Now</h2>
        <form  className="booking-form">
          <input type='text' placeholder='Your Name' required/>
          <input type='text' placeholder='Your Email' required/>
          <textarea className='text-area' rows="5" placeholder='Message' name="message"/>
          <select required>
            <option value="">Select Service</option>
            {contact.map((service) => (
            <option key={service.id} value={service.title}>{service.title}</option>
            ))}
          </select>
          <input type="date" required/>
          <button>Book Now</button>
        </form>
        </section>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Contact;