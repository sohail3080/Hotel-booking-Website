import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <i className="fas fa-bars" />
        </label>
        <div className="logo_div">
        <img src="Hotels_logo.png" alt="..." className="logo"></img>
        </div>
        <ul>
          <li className="active">
            <NavLink to="/" className="hnav">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/ourHotels" className="hnav">
              Our Hotels
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="hnav">
              About Us
            </NavLink>
          </li>
          
          <li>
            <NavLink to="/contact" className="hnav">
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className="hnav">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/signup" className="hnav">
              Sign Up
            </NavLink>
          </li>
          <li>
            <NavLink to="/ourHotels" className="hnav" id="nav_cart_icon">
            <i className="fa fa-shopping-cart" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
