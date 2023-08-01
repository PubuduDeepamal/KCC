import React from 'react';
import '../../Css/Home2.css';

const Home2 = () => {
  return (
    <div id='container'>
      <div className="container py-3">
        <header>
          <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
            <h1 class="display-4 fw-normal text-body-emphasis" id="ParkingRatestitle">
              <b>Why Choose KCC Car Park?</b>
            </h1>
          </div>
        </header>

        <main>
          <video controls width="100%" height="auto">
            <source src="https://player.vimeo.com/video/57671754?h=bb983fcaec" type="video/mp4" />
          </video>
        </main>
      </div>
    </div>
  );
};

export default Home2;
