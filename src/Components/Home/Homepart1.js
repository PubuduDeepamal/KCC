import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../../Css/Homepart1.css';
import data from '../../JSON/Homepart1.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Homepart1 = () => {
  return (
    <div className="container px-4 py-5" id="featured-3">
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        {data.features.map((feature, index) => (
          <div className="col" key={index}>
            {/* Add the box around the feature element */}
            <div className="feature-box p-4 border rounded">
              <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                {/* Use the Font Awesome icon component */}
                <FontAwesomeIcon icon={feature.icon} />
              </div>
              <h3 className="fs-2 text-body-emphasis" id="titleicon">
                <b> {feature.title}</b>
              </h3>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepart1;
