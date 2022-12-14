import React from "react";
import "./Footer.css";
import Logo from "../../Assets/Logo.svg";
import { BsInstagram, BsFacebook } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="Logo">
        <img src={Logo} alt="logo" />
        <h3>©2022 Baked Lebanon</h3>
      </div>
      <div className="BakedInfo">
        <h2>Baked</h2>
        <p>
          We serve quality desserts in Lebanon. All our bakeries are
          professionally made from scratch using only the finest ingredients.
        </p>
      </div>
      <div className="Socials">
        <h2>Follow Our Socials</h2>
        <div>
          <BsFacebook size={30} />
          <BsInstagram size={30} />
        </div>
      </div>
      <div className="Links">
        <h2>Quick Links</h2>
        <div>
          <a href="/">Home</a>
          <a href="/">Shop</a>
          <a href="/">Meet the Baker</a>
          <a href="/">Products</a>
          <a href="/">Best Sellers</a>
          <a href="/">Customize Now</a>
        </div>
      </div>
      <div className="GetUpdated">
        <h2>Always get Updated</h2>
        <p>
          Join our mailing for updates on new product launches and seasonal
          specials!
        </p>
        <input type="text" placeholder="Enter Email" />
      </div>
    </div>
  );
}
