import React from "react";
import "./Navbar.css";
import Logo from "../../Assets/Logo.svg";
import { BsSearch, BsCartDash } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="logo" width={100} height={100} />
      </div>
      <div className="NavRight">
        <div className="navRoutes">
          <a href="/">Home</a>
          <a href="/">Shop</a>
          <a href="/">Contact Us</a>
        </div>
        <div className="SearchBar">
          <input type="text" placeholder="Chocolate cookie" />
          <div className="SearchIcon">
            <BsSearch />
          </div>
        </div>
        <div className="navbarIcons">
          <FaRegUserCircle size={35} />
          <BsCartDash size={35} />
        </div>
      </div>
    </div>
  );
}
