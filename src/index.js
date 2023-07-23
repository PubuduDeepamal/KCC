import React from 'react';
import ReactDOM from 'react-dom';
import Contacut from './Pages/Contacut';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Contacut/>
    {/* <Routes path="/" component={App} /> */}
    </Router>
   
  </React.StrictMode>, 
  document.getElementById('root')
);