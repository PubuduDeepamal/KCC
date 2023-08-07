import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Css/Sidebar.css';
import { Container, Row, Col } from 'react-bootstrap';
import Costcal from '../../Components/Booking/Costcal';

const Dashboard = () => {
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
                <a className="nav-link" href="/request-call-list">
                  Request Call List
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact-us">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/booking">
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
          <br></br><br></br>
          <Costcal />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
