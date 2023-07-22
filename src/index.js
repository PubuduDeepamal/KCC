import React from 'react';
import ReactDOM from 'react-dom';
import About from './Pages/About';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <About/>
    {/* <Routes path="/" component={App} /> */}
    </Router>
   
  </React.StrictMode>, 
  document.getElementById('root')
);