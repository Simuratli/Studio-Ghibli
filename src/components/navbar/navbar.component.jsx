import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.component.scss";

function Navbar() {
  const [toggleNav, settoggleNav] = useState(false);

  function toggleNavbar() {
    settoggleNav(!toggleNav);
  }

  return (
    <>
      <nav className="navbar">
        <div className="mainContainer navbarcontainer">
          <div className="navbar-logo">
            <NavLink to="/">Studio Ghibli</NavLink>
          </div>
          <div className="navbar-items">
            <ul className="navbar-list">
              <li className="navbar-listItems">
                <NavLink to="/movies">Movies</NavLink>
              </li>
              <li className="navbar-listItems">
                <NavLink to="/location">Locations</NavLink>
              </li>
              <li className="navbar-listItems">
                <NavLink to="/about">About Us</NavLink>
              </li>
              <li className="hamburgerIcon">
                <img
                  onClick={toggleNavbar}
                  src={require("../../assets/images/menu2.png")}
                  alt="hamburger icon"
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className={`mobile-menu ${toggleNav ? "activeMobileNav" : ""}`}>
        <div align="right">
          <img
            onClick={toggleNavbar}
            src={require("../../assets/images/cancel2.png")}
            alt="Cancel"
          />
        </div>
        <ul className="mobile-list">
          <li onClick={toggleNavbar} className="mobile-listItems">
            <NavLink to="/">Home</NavLink>
          </li>
          <li onClick={toggleNavbar} className="mobile-listItems">
            <NavLink to="/movies">Movies</NavLink>
          </li>
          <li onClick={toggleNavbar} className="mobile-listItems">
            <NavLink to="/location">Locations</NavLink>
          </li>
          <li onClick={toggleNavbar} className="mobile-listItems">
            <NavLink to="/about">About Us</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
