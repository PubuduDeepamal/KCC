import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS
import '../../Css/Header1.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {MDBIcon } from 'mdb-react-ui-kit';

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
          src="../img/KCClogo.png"
          alt="Kcc logo"
          className='imgiliment'
        />

        <div className="navbar-container">
          <ul className="navbar2" style={{ justifyContent: 'flex-start', display: 'inline-flex' }}>
            <NavDropdown.Item href="/" id="hederhover">Home</NavDropdown.Item>
            <NavDropdown.Item href="/About" id="hederhover">About</NavDropdown.Item>
            <NavDropdown.Item href="/Locatin" id="hederhover">Locatin</NavDropdown.Item>
            <NavDropdown.Item href="/Contacut" id="hederhover">Contact</NavDropdown.Item>
          </ul>
          
          <a href="/Contacut">
            <button
              className="btn btn-orange"
              id="postbutton"
              type="submit"
            >
              Booking Parking Slot
            </button>
          </a>


          <ul className="navbar2" id="navbar2" style={{ display: 'inline-flex' }}>
          <MDBIcon color='secondary' id="தமிழ்" className='me-2'></MDBIcon>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
