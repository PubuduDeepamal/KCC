import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
// Import the CSS files
import 'font-awesome/css/font-awesome.min.css';
import '../../Css/Footer.css';

const Footer = () => {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span className='text-reset'>Get connected with us on social networks</span>
        </div>

        <div>
          <button className='me-4 text-reset' id="icon" onClick={() => window.open('https://www.facebook.com/')}>
            <MDBIcon color='secondary' icon='facebook' className='me-2' />
          </button>
          <button className='me-4 text-reset' id="icon" onClick={() => window.open('https://www.twitter.com/')}>
            <MDBIcon color='secondary' icon='twitter' className='me-2' />
          </button>
          <button className='me-4 text-reset' id="icon" onClick={() => window.open('https://www.instagram.com/')}>
            <MDBIcon color='secondary' icon='instagram' className='me-2' />
          </button>
          <button className='me-4 text-reset' id="icon" onClick={() => window.open('https://www.linkedin.com/')}>
            <MDBIcon color='secondary' icon='linkedin' className='me-2' />
          </button>
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
              <p id="fontstyle">
                KCC car park is a parking facility associated with KCC. it offers parking services for vehicles at a specified location.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' id="fontstyle">USEFUL LINKS</h6>
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
              <h6 className='text-uppercase fw-bold mb-4' id="fontstyle">Useful links</h6>
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
                <a href='/Booking' className='text-reset'>
                Login
                </a>
              </p>
              

            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' id="footercontact">Contact</h6>
              <p id="fontstyle">
                <MDBIcon color='secondary' icon='home' className='me-2' />
                  Kandy City Centre, Sri Dalada Veediya, Kandy 20000
              </p>
              <p id="fontstyle">
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                kcc@gmail.com
              </p>
              <p id="fontstyle">
                <MDBIcon color='secondary' icon='phone' className='me-3' /> 081 234 6578
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' id="fontstyle" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright By K. B. M. Pubudu Deepamal
      </div>
    </MDBFooter>
  );
}

export default Footer;
