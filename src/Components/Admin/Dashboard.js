// Import necessary packages
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

const Dashboard = () => {

function Dashboard() {
  const [selectedMenuItem, setSelectedMenuItem] = useState('overview');

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };

  return (
    <div className="dashboard-container">
      <Sidebar
        selectedMenuItem={selectedMenuItem}
        onMenuItemClick={handleMenuItemClick}
      />
      <MainContent selectedMenuItem={selectedMenuItem} />
    </div>
  );
}

};

export default Dashboard;
