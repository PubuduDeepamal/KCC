import React, { useState } from 'react';
import '../Css/Hero.css';
import '../Css/AboutHero.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

  const AboutHero = () => {
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
                    About Us
                </h1>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </header>
  );
}

export default AboutHero;
