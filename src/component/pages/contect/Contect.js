import React from "react";

import "./Contect.css";

const Contact = () => {
  return (
    <div className="container-fluid px-0 contect-container">
      <div className="row work-process-section">
        <div className="col-3"></div>
        <div className="col-6 work-process-holder">
          <h1 className="work-process-title ">Need a Project?</h1>
          <p className="work-process-text py-2">
            Let us know what you're looking for in an agency. We'll take a look
            and see if this could be the start of something beautiful.
          </p>
          <div className="form">
            <div className="row">
              <div className="col-6">
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Your Name"
                />
              </div>
              <div className="col-6">
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Your email"
                />
              </div>
              <div className="col-12 mt-3">
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter title"
                />
              </div>
              <div className="col-12 mt-3">
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <div className="col-12 btn-submit">
                <button className="cta-btn   py-2 px-4 mt-3">Contect us</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
