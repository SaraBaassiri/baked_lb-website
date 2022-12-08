import React from "react";
import "./Navbar.css";
import Logo from "../../Assets/Logo.svg";
import { BsSearch, BsCartDash } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="logo" width={90} height={90} />
      </div>
      <div className="NavRight">
        <div className="navRoutes">
          <a
            href="/"
            className={
              document.location.pathname !== "/" ? "inactive" : "underline"
            }
          >
            Home
          </a>
          <a
            href="/shop"
            className={
              document.location.pathname !== "/shop" ? "inactive" : "underline"
            }
          >
            Shop
          </a>
          <a
            href="/contact-us"
            className={
              document.location.pathname !== "/contact-us"
                ? "inactive"
                : "underline"
            }
          >
            Contact Us
          </a>
        </div>
        <div className="SearchBar">
          <input type="text" placeholder="Chocolate cookie" />
          <div className="SearchIcon">
            <BsSearch />
          </div>
        </div>
        <div className="navbarIcons">
          <FaRegUserCircle size={25} />
          <BsCartDash
            size={25}
            onClick={() => {
              document.location.href = "/my-cart";
            }}
          />
        </div>
      </div>
    </div>
  );
}
