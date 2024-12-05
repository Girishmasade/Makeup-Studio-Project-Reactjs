import React from "react";
import { Routes, Route } from "react-router";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Errorpage from "../Pages/Errorpage";
import Services from "../Pages/Services";
import Contact from "../Pages/Contact";

const Routers = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
  );
};

export default Routers;
