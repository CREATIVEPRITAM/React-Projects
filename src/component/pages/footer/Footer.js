import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="container-fluid px-5 footer-container">
      <div className="row">
        <div className="col-3">
          <p style={{fontWeight:"bold"}}>Piroll Design, Inc.</p>
          <p>© 2017 Piroll. All rights reserved. Designed by robirurk.</p>
        </div>
        <div className="col-2 ">
          <p>hello@pirolltheme.com</p>
          <p>+44 987 065 908 </p>
        </div>
        <div className="col-2 d-flex justify-content-end">
          <ul className="list-items">
            <li>Projects</li>
            <li>About</li>
            <li>Services</li>
            <li>Carreer</li>
          </ul>
        </div>
        <div className="col-2">
          <ul className="list-items">
            <li>News</li>
            <li>Events</li>
            <li>Contact</li>
            <li>Legals</li>
          </ul>
        </div>

        <div className="col-3 d-flex justify-content-start">
          <ul className="list-items">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Dribbble</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Footer;
