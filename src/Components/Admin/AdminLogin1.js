import React from 'react';
import '../../Css/AdminLogin.css';

const AdminLogin1 = () => {
  return (
    <div id='container1'>
      <div className="container py-3">
        <header>
          <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
            <h1 className="display-4 fw-normal text-body-emphasis" id="ParkingRatestitle"><b>Please sign in</b></h1>
          </div>
        </header>

        <main className="form-signin w-100 m-auto">
          <form>
            <div className="form-floating">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <br></br>
            <div className="form-floating">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
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
