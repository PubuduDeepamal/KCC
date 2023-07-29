import React from 'react';
import ReactDOM from 'react-dom';
import Booking from './Pages/Booking';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Booking/>
    {/* <Routes path="/" component={App} /> */}
    </Router>
   
  </React.StrictMode>, 
  document.getElementById('root')
);