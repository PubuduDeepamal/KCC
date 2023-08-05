import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../../Css/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img
        src="../img/KCClogo.png"
        alt="Kcc logo"
        className='imgiliment'
      />

      <ul className="nav flex-column sidebar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
      </ul>

      {/* Adding text at the bottom of the sidebar */}
      <div className="sidebar-bottom-text">
        Your additional text here
      </div>
    </div>
  );
}

export default Sidebar;
