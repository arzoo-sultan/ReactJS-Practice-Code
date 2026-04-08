import React from "react";
import { Link,NavLink } from "react-router-dom";
import "./Navbar.css"
export const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/settings">Settings</NavLink>
      {/* <NavLink to="/notfound">Not Found</NavLink> */}
    </nav>
  );
};