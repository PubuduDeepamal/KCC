import React from 'react';
import '../../Css/About1.css';

const About1 = () => {
  return (
    <main id="container">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side Content */}
          <div className="col-lg-6">
            <div className="px-4 py-5 text-center" id="paddingseeting">
              <h1 className="display-5 fw-bold text-body-emphasis" id="fonttype">About Us</h1>
              <br></br>
              <div className="col-lg-10 mx-auto">
                <p className="lead mb-4" id='FONTSIZE'>Kandy Municipal Council Car Park is a Parking lot located in Kandy. It is one of the 1160 Parking lots in Sri Lanka. Address of Kandy Municipal Council Car Park is Sri Wickrama Rajasinghe Mawatha, Kandy, Sri Lanka. Kandy Municipal Council Car Park can be contacted at 94812922321. Kandy Municipal Council Car Park is located in a busy area and we are covering at least 732 places around it on Srilanka-Places.com. Kandy Municipal Council Car Park is rated 4.5 (out of 5 stars) by 422 reviewers on the web.</p>
              </div>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="col-lg-6">
            <img className="d-block mx-auto mb-4 mobile-image" src="../img/img-benefits.webp" alt="Your Image" width="400" height="300" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default About1;
