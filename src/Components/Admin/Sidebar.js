import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Css/Sidebar.css';
import { Container, Row, Col } from 'react-bootstrap';

const Sidebar = () => {
  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      // Perform logout logic here
      // For example, you can redirect the user to the logout page
      window.location.href = '/adminlogin'; // Change this to your actual logout route
    }
  };

  return (
    <Container className="contact-container">
      <Row>
        <Col md={3} className="contact-info">
          <div className="sidebar">
            <img
              src="../img/KCClogo.png"
              alt="Kcc logo"
              className="imgiliment"
            />

            <ul className="nav flex-column sidebar-nav">
              <br />
              <li className="nav-item">
                <a className="nav-link" href="/AdminDashBord">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0);">
                  Request Call List
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0);">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0);">
                  Booking
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Admincostcal">
                  Parking Charge Calculator
                </a>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </ul>

            <div className="sidebar-bottom-text">
              © 2023 Copyright By K. B. M. Pubudu Deepamal
            </div>
          </div>
        </Col>

        <Col md={9} className="contact-form">
          <div className="container px-4 py-5">
            <Row className="row-cols-1 row-cols-lg-3">
              <div className="feature-box p-4 border1 rounded1 mb-5" id="featured-30">
                <h3 className="fs-2 text-body-emphasis" id="titleicon">
                  <b>1160</b>
                </h3>
                <p id="titleicon">Total Parking Slots</p>
              </div>

              <div className="feature-box p-4 border2 rounded1 mb-5" id="featured-31">
                <h3 className="fs-2 text-body-emphasis" id="titleicon31">
                  <b>60</b>
                </h3>
                <p id="titleicon">Number of full Parking Slots</p>
              </div>

              <div className="feature-box p-4 border3 rounded1 mb-5" id="featured-32">
                <h3 className="fs-2 text-body-emphasis" id="titleicon31">
                  <b>1100 </b>
                </h3>
                <p id="titleicon">Available Parking Slots</p>
              </div>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Sidebar;
