import React from "react";
import "./Navbar.css";
import Logo from "../../Assets/Logo.svg";
import { BsSearch, BsCartDash } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import Auth from "../popups/auth";

export default function Navbar() {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);
  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="logo" width={90} height={90} />
      </div>
      <div className="NavRight">
        <div className="navRoutes">
          <Link
            to="/"
            className={
              document.location.pathname !== "/" ? "inactive" : "underline"
            }
          >
            Home
          </Link>
          <Link
            to="/shop"
            className={
              document.location.pathname !== "/shop" ? "inactive" : "underline"
            }
          >
            Shop
          </Link>
          <Link
            to="/contact-us"
            className={
              document.location.pathname !== "/contact-us"
                ? "inactive"
                : "underline"
            }
          >
            Contact Us
          </Link>
        </div>
        <div className="SearchBar">
          <input type="text" placeholder="Chocolate cookie" />
          <div className="SearchIcon">
            <BsSearch />
          </div>
        </div>
        <div className="navbarIcons">
          <FaRegUserCircle
            size={25}
            onClick={() => {
              setClicked(!clicked);
            }}
          />
          <BsCartDash
            size={25}
            onClick={() => {
              navigate("/my-cart");
            }}
          />
        </div>
      </div>

      {clicked ? <Auth /> : null}
    </div>
  );
}
