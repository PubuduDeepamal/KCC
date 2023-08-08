import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert';
import '../../Css/Contactus.css';

// Import the JSON data
import contactData from '../../JSON/contactinformation.json';

const Contactus = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Show a confirmation alert using SweetAlert
    Swal({
      title: 'Success',
      text: 'Your message has been sent!',
      icon: 'success',
    }).then(() => {
      // Clear the form fields after submission
      setName('');
      setEmail('');
      setMessage('');
    });
  };

  return (
    <Container className="contact-container">
      <Row id="marginmanage">
        <Col md={6} className="contact-info" id="backgroundcolour1">
          <h2 id="contacuustittle"><b>Contact Information</b></h2>
          <p id='contacttitle1'><b>Corporate Office Address:</b><br />
            {contactData.corporateAddress}
          </p>

          <p id='contacttitle1'><b>Customer Service:</b><br />
            {contactData.customerServicePhone}
          </p>

          <p id='contacttitle1'><b>E-mail:</b><br />
            {contactData.email}
          </p>

          <p id='contacttitle1'><b>Corporate Office Hours:</b><br />
            {contactData.corporateOfficeHours}
          </p>

          <p id='contacttitle1'><b>Customer Service Hours:</b><br />
            {contactData.customerServiceHours}
          </p>
        </Col>

        <Col md={6} className="contact-form" id="backgroundcolour">
          <h2 id="contacuustittle"><b>Got a Question?</b></h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="message">
              <Form.Label>Message:</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </Form.Group>

            <Button type="submit" id="contactsubmit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contactus;
