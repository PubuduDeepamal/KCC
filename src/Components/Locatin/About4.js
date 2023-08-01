import React from 'react';
import Button from '@mui/material/Button';
import parkingData from '../../JSON/About4.json';
import '../../Css/About4.css';

const About4 = () => {
  const dataBundles = Object.values(parkingData);

  return (
    <div id='container2'>
      <br></br> <br></br> 
      <h1 id="blogtitle"><b>Parking Amenities</b></h1>
      <div className="container py-3">
        <main>
          {/* Remove the row-cols-4 class */}
          <div className="row mb-3 text-center">
            {dataBundles.map((bundle, index) => (
              <div className="col col-md-4 col-12" key={index} id="margintop">
                <div className="card mb-4 rounded-3 shadow-sm" id='box'>
                  {/* Display the image using the <img> tag */}
                  <img 
                    id='ICON'
                    src={bundle.imageSrc} // Assuming bundle.imageSrc contains the URL of the image
                    alt={`Bundle ${index + 1}`} // Optional: Provide an alt text for accessibility
                    className="card-img-top" // Optional: Add a class for styling
                  />
                  <div className="card-body">
                    <ul className="list-unstyled mt-3 mb-4" id="font">
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

export default About4;
