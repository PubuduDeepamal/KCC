import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, serverTimestamp } from 'firebase/database';
import '../Css/location1.css';

const location1 = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>Corporate Office Address:<br />
        1234 River Street<br />
        New York, NY 01001</p>

        <p>Corporate Phone:<br />
        1 (888) 123 4567</p>

        <p>Customer Service:<br />
        1 (888) 123 4568</p>

        <p>E-mail:<br />
        info@example.com</p>

        <p>Corporate Office Hours:<br />
        Mon – Fri: 8:00am – 5:00pm</p>

        <p>Customer Service Hours:<br />
        24/7</p>
      </div>

      <div className="contact-form">
        <h2>Contact Us</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="6" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default location1;
