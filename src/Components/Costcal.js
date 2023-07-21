import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/Costcal.css';
import Swal from 'sweetalert';


const Costcal = () => {
  const [vehicleType, setVehicleType] = useState('car');
  const [hours, setHours] = useState('');

  const handleVehicleTypeChange = (event) => {
    setVehicleType(event.target.value);
  };

  const handleHoursChange = (event) => {
    // Validate the input to only allow positive integers
    const value = event.target.value;
    if (value === '' || (Number(value) >= 0 && Number.isInteger(parseFloat(value)))) {
      setHours(value);
    }
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

    if (!isNaN(hours) && hours !== '') {
      const total = amount * parseInt(hours, 10);
      Swal({
        icon: 'success',
        title: 'Total Parking Charge',
        text: `$${total}`,
        timer: 3000,
        showCancelButton: false,
      });

      // Clear the text box after showing the success message
      setHours('');
    } else {
      Swal({
        title: 'Error!',
        text: 'Please enter a valid number of hours.',
        icon: 'error',
        timer: 3000,
        button: false,
      });
    }
  };

  return (
    <div className="container mt-5" id="mobsize">
      <h1 className="text-center" id="bottom1"><b>Parking Charge Calculator</b></h1>
      <div className="row mt-3">
        <div className="col-md-6 offset-md-3">
          <label htmlFor="vehicleType" id="bottom2">Select Vehicle Type:</label>
          <select
            className="form-select"
            id="vehicleType"
            value={vehicleType}
            onChange={handleVehicleTypeChange}
          >
            <option value="car">Car</option>
            <option value="van">Van</option>
            <option value="jeep">Jeep</option>
          </select>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-6 offset-md-3">
          <label htmlFor="hours" id="bottom2">Enter Hours:</label>
          <input
            type="number"
            className="form-control"
            id="hours"
            value={hours}
            onChange={handleHoursChange}
            min="0"
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-6 offset-md-3">
          <button className="btn btn-primary" id="calbutton" onClick={calculateCharge}>
            Calculate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Costcal;
