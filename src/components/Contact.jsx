import React, { useState } from 'react';
import '../css/Contact.css'; // Import CSS for styling
import Menu from './Menu'; // Import the Menu component

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement the logic to send the form data via email
    console.log('Form submitted:', formData);
    // You can also reset the form fields after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div>
      <div className="menu-container">
        <Menu /> {/* Include the Menu component */}
      </div>
      <div className="contact-container">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
        <div className="contact-info">
          <p>Phone: <a href="tel:+1234567890">+1 (951) 526-4638</a></p>
          <p>Email: <a href="mailto:Hajcocrete@gmail.com">Messge Here!</a></p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
