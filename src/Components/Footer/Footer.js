import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
// Import the CSS files
import 'font-awesome/css/font-awesome.min.css';

const Footer = () => {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' icon='facebook' className='me-2' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' icon='twitter' className='me-2' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' icon='instagram' className='me-2' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' icon='linkedin' className='me-2' />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                Kandy City Car Park
              </h6>
              <p>
                KCC car park is a parking facility associated with KCC. it offers parking services for vehicles at a specified location.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>USEFUL LINKS</h6>
              <p>
                <a href='/' className='text-reset'>
                  Home
                </a>
              </p>
              <p>
                <a href='/About' className='text-reset'>
                  About Us
                </a>
              </p>
              <p>
                <a href='/Contact' className='text-reset'>
                  Contact Us
                </a>
              </p>

            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='/Location' className='text-reset'>
                  Location
                </a>
              </p>
              <p>
                <a href='/Booking' className='text-reset'>
                  Booking Parking Slot
                </a>
              </p>
              <p>
                <a href='' className='text-reset' disable>
                  Login
                </a>
              </p>

            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' id="footercontact">Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                  Kandy City Centre, Sri Dalada Veediya, Kandy 20000
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                kcc@gmail.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> 081 234 6578
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright By K. B. M. Pubudu Deepamal
      </div>
    </MDBFooter>
  );
}

export default Footer;
