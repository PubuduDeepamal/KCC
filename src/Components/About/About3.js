import React from 'react';
import '../../Css/About3.css';

const About3 = () => {
  return (
    <main id="container">
      <br />
      <br />
      <h1 id="blogtitle">
        <b>Latest News</b>
      </h1>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="blog-card blog-card-blog">
              <div className="blog-card-image">
                <img
                  className="Alimentphoto"
                  src="https://parkivia.ancorathemes.com/wp-content/uploads/2017/12/post-3-copyright-370x220.jpg"
                  alt="News 1"
                />
                <div className="ripple-cont"></div>
              </div>
              <div className="blog-table">
                <h6 className="blog-category blog-text-success">
                  <i className="far fa-newspaper"></i> News
                </h6>
                <h4 className="blog-card-caption">
                  <button id="font">
                    Complete Parking Guidance System Installation
                  </button>
                </h4>
                <div className="ftr">
                  <div className="stats">
                    <i className="far fa-clock"></i> December 21, 2017
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="blog-card blog-card-blog">
              <div className="blog-card-image">
                <img
                  className="Alimentphoto"
                  src="https://parkivia.ancorathemes.com/wp-content/uploads/2017/12/post-4-copyright-370x220.jpg"
                  alt="News 2"
                />
                <div className="ripple-cont"></div>
              </div>
              <div className="blog-table">
                <h6 className="blog-category blog-text-success">
                  <i className="fas fa-blog"></i> News
                </h6>
                <h4 className="blog-card-caption">
                  <button id="font">
                    Parking Spaces That Could Make You Rich
                  </button>
                </h4>
                <div className="ftr">
                  <div className="stats">
                    <i className="far fa-clock"></i> December 16, 2022
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="blog-card blog-card-blog">
              <div className="blog-card-image">
                <img
                  className="Alimentphoto"
                  src="https://parkivia.ancorathemes.com/wp-content/uploads/2017/12/post-1-copyright-370x220.jpg"
                  alt="News 3"
                />
                <div className="ripple-cont"></div>
              </div>
              <div className="blog-table">
                <h6 className="blog-category blog-text-success">
                  <i className="far fa-newspaper"></i> News
                </h6>
                <h4 className="blog-card-caption">
                  <button id="font">Car Culture is Nothing to Be Proud of</button>
                </h4>
                <div className="ftr">
                  <div className="stats">
                    <i className="far fa-clock"></i> Feb 16, 2023
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </main>
  );
};

export default About3;
