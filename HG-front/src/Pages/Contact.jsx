import React, { useState, useEffect, useRef } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import "../Components/Styles/Contact.css"
import servicePageData from "../Components/Assets/ServicePageData"
import Phone from "../Components/Videos & Images/phone icon1.png"
import Email from "../Components/Videos & Images/email icon1.png"
import Address from "../Components/Videos & Images/address icon1.png"

const Contact = () => {
  const [contact, setContact] = useState([]);
   const form = useRef();

  useEffect(() => {
    setContact(servicePageData);
  },[]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_xkhw0pd',
      'template_5ocumfk',
      form.current,
      'yw64RDaMkr5adaWgP'
    )
    .then(() => {
      toast.success("Email sent successfully!")
      // alert("Email sent successfully!");
      form.current.reset();
    })
    .catch((err) => {
      console.error("Failed to send email:", err);
      toast.error("Failed to send message.");
      // alert("Failed to send message.");
    });
  };

  return (
    <div className='c'>
      <div className="c-bg">
      <div className="c-wrapper">
        <div className="c-left">
          <h3 className='c-title'>Contact Us for your Appointment & Inquiries</h3>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" /> +2347033992717, +2348024746657
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" /> preshy4890@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" /> Singer Bus stop, Sango Ota, Ogun State.
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className='c-desc'>
            <b>How can we serve you the best?</b> Get in touch. We will surely put a smile on your face.
          </p>
        <section className='booking-section'> 
        <h2 className='to-glow'>Ready to Glow? Book Now</h2>
        <form  className="booking-form" ref={form} onSubmit={sendEmail}>
          <input type='text' name="user_name" placeholder='Your Name' required/>
          <input type='text' name="user_email" placeholder='Your Email' required/>
          <textarea className='text-area' rows="5" placeholder='Message' name="message"/>
          <select name="service" required>
            <option value="">Select Service</option>
            {contact.map((service) => (
            <option key={service.id} value={service.title}>{service.title}</option>
            ))}
          </select>
          <input type="date" name="preferred_date" required/>
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