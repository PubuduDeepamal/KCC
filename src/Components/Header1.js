import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS
import '../Css/Header1.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const Header = () => {
  return (
    <header id="hederwidth">
      <nav
        className="navbar navbar-light bg-light justify-content-between"
        style={{
          backgroundColor: 'lightblue',
          paddingBottom: '0px',
          paddingTop: '0px',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <img
          src="https://www.lankapropertyweb.com/images/logo/lpw_logo_v12.svg"
          alt="Lanka Property Web Logo"
          className='imgiliment'
        />

        <div className="navbar-container">
          <ul className="navbar2" style={{ justifyContent: 'flex-start', display: 'inline-flex' }}>
            <NavDropdown.Item href="/Home" id="hederhover">Home</NavDropdown.Item>
            <NavDropdown.Item href="/About" id="hederhover">About</NavDropdown.Item>
            <NavDropdown.Item href="#action3" id="hederhover">Locatin</NavDropdown.Item>
            <NavDropdown.Item href="/About" id="hederhover">Contact</NavDropdown.Item>
          </ul>
          <button
            className="btn btn-orange" // Add a custom CSS class for the orange button
            id="postbutton"
            type="submit"
            style={{ color: 'white', marginLeft: '25px', marginRight: '-25px' }}
          >
            Booking Parking Slot
          </button>

          <ul className="navbar2" id="navbar2" style={{ display: 'inline-flex' }}>
          <MDBIcon color='secondary' icon='lock' id="தமிழ்" className='me-2'></MDBIcon>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
