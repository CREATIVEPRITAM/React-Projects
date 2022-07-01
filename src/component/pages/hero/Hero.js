import React, { useEffect, useState } from "react";
import Data from "../../Sourceses/Sourceses";

import "./Hero.css";

const Hero = () => {
  const initialData = {
    title: "title",
    description: "Description",
    image: "hero.png",
    cta: "contect",
  };

  const [showData, setShowData] = useState(initialData);

  useEffect(() => {
    setShowData(Data.hero);
  }, []);

  return (
    <div className="container-fluid px-0 custom-home-container">
      <div className="row">
        <div className="col-6 image-holder">
          <img src={showData.image} height="300px" />
        </div>
        <div className="col-6 text-container">
          <h1 className="main-title mb-4">{showData.title}</h1>
          <p className="main-message pr-5 mb-4">{showData.description}</p>
          <button className="cta-btn  py-2 px-4">{showData.cta}</button>
        </div>
      </div>
    </div>
  );
};
export default Hero;
