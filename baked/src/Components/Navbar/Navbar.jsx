import React from "react";
import "./Navbar.css";
import Logo from "../../Assets/Logo.svg";

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
      </div>
    </div>
  );
}
