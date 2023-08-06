import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Css/Costcal.css';
import Swal from 'sweetalert';

const Costcal = () => {
  const [vehicleType, setVehicleType] = useState('car');
  const [entryTime, setEntryTime] = useState('');
  const [departureTime, setDepartureTime] = useState('');
  const [hours, setHours] = useState('');

  const handleVehicleTypeChange = (event) => {
    setVehicleType(event.target.value);
  };

  const handleEntryTimeChange = (event) => {
    setEntryTime(event.target.value);
  };

  const handleDepartureTimeChange = (event) => {
    setDepartureTime(event.target.value);
  };

  const handleHoursChange = (event) => {
    const value = event.target.value;
    if (value === '' || (Number(value) >= 0 && Number.isInteger(parseFloat(value)))) {
      setHours(value);
    }
  };

  const calculateCharge = () => {
    const entryTimestamp = new Date(`2000-01-01T${entryTime}:00`);
    const departureTimestamp = new Date(`2000-01-01T${departureTime}:00`);

    if (entryTimestamp >= departureTimestamp) {
      Swal({
        title: 'Error!',
        text: 'Departure time should be later than entry time.',
        icon: 'error',
        timer: 3000,
        button: false,
      });
      return;
    }

    const timeDifferenceInHours = (departureTimestamp - entryTimestamp) / (1000 * 60 * 60);
    let amount = 0;
    switch (vehicleType) {
      case 'car':
        amount = 80;
        break;
      case 'van':
        amount = 100;
        break;
      case 'jeep':
        amount = 120;
        break;
      default:
        amount = 0;
    }

    const total = amount * timeDifferenceInHours;
    Swal({
      icon: 'success',
      title: 'Total Parking Charge',
      text: `Rs ${total.toFixed(2)}`,
      timer: 3000,
      showCancelButton: false,
    });

    setEntryTime('');
    setDepartureTime('');
    setHours('');
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
            <option value="car">Saloon / Hatchback</option>
            <option value="van">SUV / 4x4</option>
            <option value="jeep">Station / Wagon</option>
          </select>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-6 offset-md-3">
          <label htmlFor="entryTime" id="bottom2">Entry Time:</label>
          <input
            type="time"
            className="form-control"
            id="entryTime"
            value={entryTime}
            onChange={handleEntryTimeChange}
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-6 offset-md-3">
          <label htmlFor="departureTime" id="bottom2">Departure Time:</label>
          <input
            type="time"
            className="form-control"
            id="departureTime"
            value={departureTime}
            onChange={handleDepartureTimeChange}
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
