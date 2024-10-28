// src/ContactForm.js
import React, { useState } from 'react';
import './Contact.css'; // Create this file for custom styles
import { FaPaperclip } from "react-icons/fa6";

const Contact = () => {
    const [color,setColor] = useState(false)
    const colorChange =()=>{
      if(type === true){
        setColor(true)
      }else{
        setColor(false)
      }
    }
  
      window.addEventListener('scroll', colorChange)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectInfo: '',
    file: null,
    privacyPolicy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    // Here you can handle the form submission, e.g., send data to a backend
  };

  return (
    <div className="contact-cont">
        <div className="contact-title">
        <h2>Contact Us</h2>
        </div>
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name*</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className={color ? "status status-bg" : "status"}></div>
      <div className="form-group">
        <label htmlFor="email">Email*</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className={color ? "status status-bg" : "status"}></div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      <div className={color ? "status status-bg" : "status"}></div>
      <div className="form-group">
        <label htmlFor="projectInfo">Project Info (Budget if available)*</label>
        <textarea
          id="projectInfo"
          name="projectInfo"
          value={formData.projectInfo}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <div className={color ? "status status-bg" : "status"}></div>
      <div className="form-group" >
        <label htmlFor="file"> <FaPaperclip /> Attach your file (up to 20MB)</label>
        <input
          type="file"
          id="file"
          name="file"
          onChange={handleFileChange}
          hidden
          required
        />
      </div>
      <div className="form-group label">
        <p>We will process your personal information in accordance with our Privacy Policy.</p>
        <input 
          type="checkbox"
          id="privacyPolicy"
          name="privacyPolicy"
          checked={formData.privacyPolicy}
          onChange={handleChange}
          required
          placeholder='I agree to the Privacy Policy'
        />
        <label htmlFor="privacyPolicy" className='privacy'>
          I agree to the Privacy Policy
        </label>
      </div>
      <button className='form-btn' type="submit">Send Message</button>
    </form>
    </div>
  );
};

export default Contact;
