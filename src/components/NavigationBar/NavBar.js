import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
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
      <div>
        <h3 className="pageNumber">01/01</h3>
        <h3 className="betaTag">Beta</h3>
      </div>
      {(toggleMenu || screenWidth > 500) && (
        <ul className={mobileView ? "mobile-nav" : "desktop-nav"}>
          <NavLink to="/" className="tabText" activeclassname="active">
            <li className="buttonText">Home</li>
          </NavLink>
          <NavLink to="/about" className="tabText" activeclassname="active">
            <li className="buttonText">About</li>
          </NavLink>
          <NavLink to="/skills" className="tabText" activeclassname="active">
            <li className="buttonText">Skills</li>
          </NavLink>
          <NavLink to="/projects" className="tabText" activeclassname="active">
            <li className="buttonText">Projects</li>
          </NavLink>
          <NavLink to="/blogs" className="tabText" activeclassname="active">
            <li className="buttonText">Blogs</li>
          </NavLink>
          <NavLink to="/contact" className="tabText" activeclassname="active">
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
