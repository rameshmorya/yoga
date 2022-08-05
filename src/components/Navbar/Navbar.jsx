import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Navbar/Navbar.css";

const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false);

  const ToggleSwitch = () => {
    setNavToggle(!navToggle);
  };

  return (
    <>
      <div
        onClick={ToggleSwitch}
        className={"navToggle" + (navToggle ? " active " : "")}
      >
        <span></span>
      </div>
      <nav className={navToggle ? "active" : ""}>
        <div
          onClick={ToggleSwitch}
          className={"navCloseBtn" + (navToggle ? " active " : "")}
        ></div>
        <ul>
          <li>
            <NavLink className="navlink active" aria-current="page" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="navlink" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="navlink" to="/services">
              Classes
            </NavLink>
          </li>
          <li>
            <NavLink className="navlink" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
