import React, { useEffect, useState } from "react";
import Skill from "../skill/Skill";
import "./About.css";

import Data from "../../Sourceses/Sourceses";

const About = () => {
  const initialData = {
    title: "title",
    description: "description",
    image: "demo",
  };

  const [aboutData, setAboutData] = useState(initialData);

  useEffect(() => {
    if(Data != undefined){
      setAboutData(Data.about);
    }else{
      setAboutData(aboutData);
    }
  }, []);


  return (
    <div className="container-fluid">
      <div className="row aboutus-section">
        <div className="col-2"></div>
        <div className="col-8 aboutus-holder">
          <h1 className="aboutus-title ">{aboutData.title}</h1>
          <p className="aboutus-text py-2">{aboutData.description}</p>
          <img className="aboutus-sign" src={aboutData.image}></img>
        </div>
        <div className="col-2"></div>
      </div>
      <Skill data={Data} />
    </div>
  );
};
export default About;
