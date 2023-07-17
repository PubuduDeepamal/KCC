import React, { useState } from 'react';
import './Css/Costcal.css';

const Header = () => {
  const [vehicleType, setVehicleType] = useState('car');
  const [hours, setHours] = useState('');

  const handleVehicleTypeChange = (event) => {
    setVehicleType(event.target.value);
  };

  const handleHoursChange = (event) => {
    setHours(event.target.value);
  };

  const calculateCharge = () => {
    let amount = 0;
    switch (vehicleType) {
      case 'car':
        amount = 19;
        break;
      case 'van':
        amount = 30;
        break;
      case 'jeep':
        amount = 1000;
        break;
      default:
        amount = 0;
    }

    if (!isNaN(hours)) {
      const total = amount * parseInt(hours);
      alert(`Total Parking Charge: ${total}`);
    } else {
      alert('Please enter a valid number of hours.');
    }
  };

  return (
    <div>
      <h1>Parking Charge Calculator</h1>
      <div>
        <label htmlFor="vehicleType">Select Vehicle Type:</label>
        <select id="vehicleType" value={vehicleType} onChange={handleVehicleTypeChange}>
          <option value="car">Car</option>
          <option value="van">Van</option>
          <option value="jeep">Jeep</option>
        </select>
      </div>
      <div>
        <label htmlFor="hours">Enter Hours:</label>
        <input type="number" id="hours" value={hours} onChange={handleHoursChange} />
      </div>
      <div>
        <button onClick={calculateCharge}>Calculate</button>
      </div>
    </div>
  );
};

export default Header;
