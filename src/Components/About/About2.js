import React from 'react';
import parkingData from '../../JSON/About2.json';
import '../../Css/About2.css';

const About2 = () => {
  const dataBundles = Object.values(parkingData);

  return (
    <div id='container1'>
      <div className="container py-3">
        <main>
          <div className="row row-cols-4 mb-3 text-center">
            {dataBundles.map((bundle, index) => (
              <div className="col col-md-3 col-12" key={index} id="margintop">
                <div className="card mb-4 rounded-3 shadow-sm" id='box'>
                  {/* Display the image using the <img> tag */}
                  <img 
                    id='ICON'
                    src={bundle.imageSrc} // Assuming bundle.imageSrc contains the URL of the image
                    alt={`Bundle ${index + 1}`} // Optional: Provide an alt text for accessibility
                    className="card-img-top" // Optional: Add a class for styling
                  />
                  <div className="card-body">
                    <h1 className="card-title pricing-card-title" id="font">
                      {bundle.price}
                    </h1>
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

export default About2;
