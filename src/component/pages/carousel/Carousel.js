import React from "react";

import "./Carousel.css";

const Carousel = () => {
  return (
    <div
      id="carouselExampleIndicators"
      class="carousel slide slider-content-holder "
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner  w-50">
        <div class="carousel-item active ">
          <div class="d-block w-100">
            <p className="slider-text">
              “Outstanding job and exceeded all expectations. It was a pleasure
              to work with them on a sizable first project and am looking
              forward to start the next one asap.”
            </p>
            <p className="slider-text user-name-text">Michael Hopkins</p>
          </div>
        </div>
        <div class="carousel-item ">
          <div class="d-block w-100">
            <p className="slider-text">
              “Outstanding job and exceeded all expectations. It was a pleasure
              to work with them on a sizable first project and am looking
              forward to start the next one asap.”
            </p>
            <p className="slider-text user-name-text">Michael Hopkins</p>
          </div>
        </div>
        <div class="carousel-item">
          <div class="d-block w-100">
            <p className="slider-text">
              “Outstanding job and exceeded all expectations. It was a pleasure
              to work with them on a sizable first project and am looking
              forward to start the next one asap.”
            </p>
            <p className="slider-text user-name-text">Michael Hopkins</p>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
};
export default Carousel;
