import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const handleToggle = () => {
    const toggle = document.querySelector(".toggle");
    const ul = document.querySelector(".navbar ul");

    toggle.classList.toggle("active-toggle");
    ul.classList.toggle("active-ul");
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <div className="logo"></div>
        <h3>Pascal Hector</h3>
      </div>
      <ul>
        <li>
          <NavLink exact to="/profil" activeClassName="nav-active">
            Profil
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/portfolio" activeClassName="nav-active">
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/contact" activeClassName="nav-active">
            Contact
          </NavLink>
        </li>
      </ul>
      <div className="toggle" onClick={handleToggle}>
        <div className="bar"></div>
      </div>
    </nav>
  );
};
export default Navbar;
