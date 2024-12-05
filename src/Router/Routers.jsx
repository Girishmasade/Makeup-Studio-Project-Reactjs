import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Errorpage from "../Pages/Errorpage";
import Services from "../Pages/Services";
import Contact from "../Pages/Contact";

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </Router>
  );
};

export default Routers;
