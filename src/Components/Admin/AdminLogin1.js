import React, { useState } from 'react';

import '../../Css/AdminLogin.css';
import Swal from 'sweetalert';

const AdminLogin1 = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Define 3 sets of valid usernames and passwords
    const validUsers = [
      { username: 'user', password: '1234' },
      { username: 'user2@example.com', password: 'password2' },
      { username: 'user3@example.com', password: 'password3' },
    ];

    // Check if the entered username and password match any of the valid sets
    const isValidUser = validUsers.some(
      (user) => user.username === username && user.password === password
    );

    if (isValidUser) {
      // Perform the login action here, e.g., redirect to a dashboard page
      console.log('Login successful!');
      // Replace the console.log with the action you want to take upon successful login.

    } else {
      // Display SweetAlert error message
      Swal({
        icon: 'error',
        title: 'Invalid username or password',
        text: 'Please check your username and password and try again.',
      });
    }
  };

  return (
    <div id='container1'>
      <div className="container py-3">
        <header>
          <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
            <h1 className="display-4 fw-normal text-body-emphasis" id="ParkingRatestitle"><b>Please sign in</b></h1>
          </div>
        </header>

        <main className="form-signin w-100 m-auto">
          <form onSubmit={handleFormSubmit}>
            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <br />
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="form-check text-start my-3">
              <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Remember me
              </label>
            </div>
            <button className="btn btn-primary w-100 py-2" id="Sign" type="submit">Sign in</button>
          </form>
        </main>
      </div>
    </div>
  );
};

export default AdminLogin1;
