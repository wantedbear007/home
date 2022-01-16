import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { FaListUl } from "react-icons/fa";

const NavBar = () => {
  const [mobileView, setMobileView] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleMenu = () => {
    setMobileView(!mobileView);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav className="parentContainer">
      <h3 className="pageNumber">01/01</h3>
      {(toggleMenu || screenWidth > 500) && (
        <ul className={mobileView ? "mobile-nav" : "desktop-nav"}>
          <NavLink to="/" className="home" activeclassname="active">
            <li className="buttonText">Home</li>
          </NavLink>
          <NavLink to="/about" className="about" activeclassname="active">
            <li className="buttonText">About</li>
          </NavLink>
          <NavLink to="/skills" className="skills" activeclassname="active">
            <li className="buttonText">Skills</li>
          </NavLink>
          <NavLink to="/blogs" className="blog" activeclassname="active">
            <li className="buttonText">Blogs</li>
          </NavLink>
          <NavLink to="/contact" className="contact" activeclassname="active">
            <li className="buttonText">Contact</li>
          </NavLink>
        </ul>
      )}

      <button className="mobile-nav-button " onClick={toggleMenu}>
        <FaListUl className="buttonIcon" />
      </button>
    </nav>
  );
};

export default NavBar;
