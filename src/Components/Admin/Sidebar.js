import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Css/Sidebar.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Sidebar = () => {
  return (
    <Container className="contact-container">
      <Row>
        <Col md={6} className="contact-info">
          <div className="sidebar">
            <img
              src="../img/KCClogo.png"
              alt="Kcc logo"
              className="imgiliment"
            />

            <ul className="nav flex-column sidebar-nav">
              <br></br>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>

            <div className="sidebar-bottom-text">
              © 2023 Copyright By K. B. M. Pubudu Deepamal
            </div>
          </div>
        </Col>

        <Col md={6} className="contact-form">
          <div className="container px-4 py-5" id="featured-3">
            <Row className="row-cols-1 row-cols-lg-3">
              <div className="feature-box p-4 border rounded">
                <h3 className="fs-2 text-body-emphasis" id="titleicon">
                  <b>rfffffffffffffff </b>
                </h3>
                <p id="titleicon">fffffffffffffff</p>
              </div>

              <div className="feature-box p-4 border rounded">
                <h3 className="fs-2 text-body-emphasis" id="titleicon">
                  <b>rfffffffffffffff </b>
                </h3>
                <p id="titleicon">fffffffffffffff</p>
              </div>

              <div className="feature-box p-4 border rounded">
                <h3 className="fs-2 text-body-emphasis" id="titleicon">
                  <b>rfffffffffffffff </b>
                </h3>
                <p id="titleicon">fffffffffffffff</p>
              </div>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Sidebar;
