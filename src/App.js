import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./component/navbar/Navbar";
import About from "./component/pages/about/About";
import Home from "./component/pages/home/Home";
import Work from "./component/pages/work/Work";
import Hero from "./component/pages/hero/Hero";
import Services from "./component/pages/services/Services";
import Carousel from "./component/pages/carousel/Carousel";
import Contact from "./component/pages/contect/Contect";

function App() {
  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/hero" element={<Hero />} />
        <Route extec path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonials" element={<Carousel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
