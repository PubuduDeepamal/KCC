import React from 'react';
import parkingData from '../../JSON/ParkingRates.json';
import '../../Css/ParkingRates.css'

const ParkingRates = () => {
  const dataBundles = Object.values(parkingData);

  return (
    <div id='container'>
    <div className="container py-3">

      <header>
        <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
          <h1 class="display-4 fw-normal text-body-emphasis" id="ParkingRatestitle"><b>Parking Options and Rates</b></h1>
          <p class="fs-5 text-body-secondary"></p>
        </div>
      </header>

      <main>
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          {dataBundles.map((bundle, index) => (
            <div className="col" key={index}>
              <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3" id='font12'>
                  <h4 className="my-0 fw-normal" id='font'>{bundle.title}</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">
                    {bundle.price}
                    <small className="text-body-secondary fw-light" id='font'>/Per Hour</small>
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4" id='font'>
                    {bundle.description.split('\n').map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
    </div>
  );
};

export default ParkingRates;
