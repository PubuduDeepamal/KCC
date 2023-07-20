import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert';

const Footer = () => {
  const [currentDateTime, setCurrentDateTime] = useState('');

  useEffect(() => {
    // Function to get the current date and time
    const getCurrentDateTime = () => {
      const currentDate = new Date();
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
      return currentDate.toLocaleDateString(undefined, options);
    };

    // Update the currentDateTime state every second
    const interval = setInterval(() => {
      setCurrentDateTime(getCurrentDateTime());
    }, 1000);

    // Clear the interval on unmount
    return () => clearInterval(interval);
  }, []);

  const handleSubscribe = () => {
    // Show the SweetAlert message
    Swal({
      title: 'Subscribed!',
      text: 'You have successfully subscribed to our newsletter.',
      icon: 'success',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'OK'
    });
  };

  return (
    <footer className="container py-5">
      <div className="row">
        <div className="col-6 col-md-2 mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
          </ul>
        </div>

        <div className="col-6 col-md-2 mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
          </ul>
        </div>

        <div className="col-md-5 offset-md-1 mb-3">
          <form>
            <h5>Subscribe to our newsletter</h5>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
              <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
              <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
              <button className="btn btn-primary" type="button" onClick={handleSubscribe}>Subscribe</button>
            </div>
          </form>
        </div>
      </div>

      <div className="border-top">
        <p>&copy; {currentDateTime} Company, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
