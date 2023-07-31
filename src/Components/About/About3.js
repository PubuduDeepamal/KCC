import React from 'react';
import '../../Css/About3.css';

const About3 = () => {
  return (
   <main id="container">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side Content */}
          <div className="col-lg-6">
            <div className="px-4 py-5 text-center" id="paddingseeting">
              <h1 className="display-5 fw-bold text-body-emphasis">Our History</h1>
              <div className="col-lg-10 mx-auto">
                <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world's most popular front-end open-source toolkit, featuring Sass variables and mixins, a responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
              </div>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="col-lg-6">
            <img className="d-block mx-auto mb-4" src="../img/img-benefits.webp" alt="Your Image" width="400" height="300" />
          </div>
        </div>
      </div>
   </main>
  );
};

export default About3;
