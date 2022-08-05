import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
// import Contact from './Contact';

const Pages = () => {
  return (
    <>
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route index path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};
export default Pages;
