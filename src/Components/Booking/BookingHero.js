// import React, { useState } from 'react';
import '../../Css/Hero.css';
import { Container, Row, Col} from 'react-bootstrap';

  const BookingHero = () => {
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
                Booking Parking Slot
                </h1>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </header>
  );
}

export default BookingHero;
