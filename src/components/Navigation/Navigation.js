import React, {useState} from "react";
import NavBar from "../NavigationBar/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Skills from "../../pages/Skills/Skills";
import Blogs from "../../pages/Blogs/Blogs";
import Contact from "../../pages/Contact/Contact";
import Projects from "../../pages/Projects/Projects";
import  NotFound from "../../pages/NotFound/NotFound";

const Navigation = () => {


  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default Navigation;
