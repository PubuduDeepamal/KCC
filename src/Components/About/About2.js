import React from 'react';
import Button from '@mui/material/Button';
import parkingData from '../../JSON/About2.json';
import '../../Css/About2.css';

const About2 = () => {
  const dataBundles = Object.values(parkingData);

  return (
    <div id='container'>
      <div className="container py-3">
        <main>
          <div className="row row-cols-4 mb-3 text-center">
            {dataBundles.map((bundle, index) => (
              <div className="col col-md-3 col-12" key={index} id="margintop">
                <div className="card mb-4 rounded-3 shadow-sm">
                    <br></br>
                  <h4 className="my-0 fw-normal">{bundle.title}</h4>
                  <div className="card-body">
                    <h1 className="card-title pricing-card-title">
                      {bundle.price}
                    </h1>
                    <ul className="list-unstyled mt-3 mb-4">
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

export default About2;
