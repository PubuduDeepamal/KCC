import React from 'react';

const About1 = () => {
  return (
   <main>
      <div class="px-4 py-5 my-5 text-center">
          {/* <img class="d-block mx-auto mb-4" src="../assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"> */}
          <h1 class="display-5 fw-bold text-body-emphasis">Centered hero</h1>
          <div class="col-lg-6 mx-auto">
            <p class="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the worlds most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Contact Us</button>
            </div>
          </div>
      </div>
   </main>
  );
};

export default About1;
