import React, { useState } from 'react';
import './Css/Hero.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert';

export default function HeroImage() {
  const [inputValue, setInputValue] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if the inputValue is empty
    if (!inputValue.trim()) {
      // Show the error message using SweetAlert
      Swal({
        title: "Error!",
        text: "Message box is empty. Please enter a message.",
        icon: "error",
        timer: 3000, // The popup will close automatically after 3 seconds
        button: false // Disable the "Confirm" button
      });
      return; // Exit the function early if the input is empty
    }

    // Perform your submit logic here (e.g., sending the message)

    // Show the success message using SweetAlert
    Swal({
      title: "Success!",
      text: "Message submitted.",
      icon: "success",
      timer: 3000, // The popup will close automatically after 3 seconds
      button: false // Disable the "Confirm" button
    });

    // Reset the input value
    setInputValue('');
  };

  return (
    <header style={{ paddingLeft: 0 }}>
      <div
        className='p-5 text-center bg-image'
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/parking_1127-2914.jpg?size=626&ext=jpg&ga=GA1.1.1466838060.1689437624&semt=ais')",
          height: 400,
        }}
      >
        <div className='mask' id='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <Container>
            <Row className='justify-content-center align-items-center' id='boxtop'>
              <Col md={6} className='text-white'>
                <h1 className='mb-3 custom-heading' id='Heading'>
                  Heading
                </h1>
                <Form onSubmit={handleSubmit}>
                  <Form.Group as={Row} className='align-items-center'>
                    <Col>
                      <Form.Control
                        type='text'
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder='Enter Message'
                      />
                    </Col>
                    <Col xs='auto'>
                      <Button variant='outline-light' id='postbutton' type='submit' role='button'>
                        Submit
                      </Button>
                    </Col>
                  </Form.Group>
                </Form>
                {showSuccessMessage && <p className='text-success'>Success! Message submitted.</p>}
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </header>
  );
}
