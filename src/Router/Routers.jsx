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
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="*" element={<Errorpage />} />
      </Routes>
    </Router>
  );
};

export default Routers;
