import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <nav className="nav-style">
      <NavLink to="/">About</NavLink>
      <NavLink to="/work">Work</NavLink>
      <NavLink to="/resume">Resume</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
}
