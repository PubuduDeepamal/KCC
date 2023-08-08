import React, { useState } from 'react';
import '../../Css/Hero.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert';

export default function HeroImage() {
  const [inputValue, setInputValue] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputChange2 = (event) => {
    setInputValue2(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if any of the inputValues is empty
    if (!inputValue.trim() || !inputValue2.trim()) {
      // Show the error message using SweetAlert
      Swal({
        title: 'Error!',
        text: 'Message box is empty. Please enter both messages.',
        icon: 'error',
        timer: 3000,
        button: false,
      });
      return;
    }

    // Show the success message using SweetAlert
    setShowSuccessMessage(true);
    Swal({
      title: 'Success!',
      text: 'Messages submitted.',
      icon: 'success',
      timer: 3000, // The popup will close automatically after 3 seconds
      button: false, // Disable the "Confirm" button
    });

    // Reset the input values
    setInputValue('');
    setInputValue2('');
  };

  return (
    <header style={{ paddingLeft: 0 }}>
      <div
        className='p-5 text-center bg-image'
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/2859169/pexels-photo-2859169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        }}
      >
        <div className='mask' id='mask'>
          <Container>
            <Row className='justify-content-center align-items-center' id='boxtop'>
              <Col md={6} className='text-white'>
                <h1 className='mb-3 custom-heading' id='Heading'>
                  We Have The Best Deals For Parking Lots!
                </h1>
                <Form onSubmit={handleSubmit}>
                  <Form.Group as={Row} className='align-items-center' id='input'>
                    <Col>
                      <Form.Control
                        type='text'
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder='Your Name'
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        type='number'
                        value={inputValue2}
                        onChange={handleInputChange2}
                        placeholder='Your Phone Number'
                      />
                    </Col>
                    <Col xs='auto'>
                      <Button variant='outline-light' id='postbutton' type='submit' role='button'>
                        Request a Call
                      </Button>
                    </Col>
                  </Form.Group>
                </Form>
                {showSuccessMessage && <p className='text-success'>Success! Messages submitted.</p>}
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </header>
  );
}
