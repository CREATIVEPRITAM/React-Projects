import React, { useEffect, useState } from "react";
import About from "../about/About";
import Hero from "../hero/Hero";
import Number from "../number/Number";
import Video from "../video-section/Video";
import WorkProcess from "../work process/WorkProcess";
import Work from "../work/Work";
import Carousel from "../carousel/Carousel";
import Client from "../clients/Client";
import Contect from "../contect/Contect";
import Services from "../services/Services";
import Footer from "../footer/Footer";
//import Data from "../../Sourceses/Sourceses";

const Home = () => {
  // console.log(Data);
  // const [api, setApi] = useState("");
  // useEffect(() => {
  //   setApi(Data);
  // }, []);
  // console.log(api);
  return (
    <div className="container-fluid">
      <Hero />
      <About />
      <Number />
      <Work />
      <WorkProcess />
      <Video />
      <Services />
      <Carousel />
      <Client />
      <Contect />
      <Footer />
    </div>
  );
};
export default Home;
