import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Home/>
    {/* <Routes path="/" component={App} /> */}
    </Router>
   
  </React.StrictMode>, 
  document.getElementById('root')
);