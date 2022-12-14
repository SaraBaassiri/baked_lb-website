import React from "react";
import "./Cart2.css";

import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Link, useHref, useNavigate } from "react-router-dom";


import Radio from "../../../Components/RadioBtn/radiobtn"

import cbtn from "../../../Assets/theCbutton.svg"
import paybtn from "../../../Assets/pay.svg"


export default function Cart() {
  const navigate = useNavigate();
  const items = useSelector((state) => state.cart.Items);
  const [total, setTotal] = useState(0);
  const [name, setName] = useState("john");
  const [lastName, setLastName] = useState("doe");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("81915738");


  const calculateTotal = () => {
    let totalPrice = 0;
    items.forEach((item) => {
      totalPrice += item.Price * item.quantity;
    });
    setTotal(totalPrice);
  };


  useEffect(() => {
  calculateTotal();
  });

  return (
    <div className="Conatainer">
      <h1 className="Title ml-5">Shopping Cart</h1>
      <div className="blackLine ml-5"></div>

    <div className="inner" >
      <div className="infoContainer">
        <div className="BigInput" >
        <div className="blackcircle" >
          a
        </div>
        <div className="thingstogodown" >
        <p className="loginText ml-5" style={{ marginBottom: "-10px", fontWeight: "300" }}>LOGIN ✔️</p>
        <p className="ml-5" >{name} {lastName} <span>{phoneNumber}</span></p>
        </div>
        <h2 className="change" >Change</h2>
        </div>
        <div className="shipping">
        <div className="blackcircle" >
          b
        </div>
        <p>
          Shipping Address
        </p>
        </div>
        <div className="inputContainer" >
        <div className="Left" >
        <p>First Name*</p>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <p>Address*</p>
        <input
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}

        ></input>
        <p>City*</p>
        <input
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}



        ></input>
        <p>Postal Code*</p>
        <input

          value={postalCode}
          onChange={(e) => {
            setPostalCode(e.target.value);
          }}

        ></input>
        </div>
        <div className="Right" >
        <p>Last Name*</p>
        <input

          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}


        ></input>
        <p>Apt. Suite*</p>
        <input
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}

        ></input>
        <p>Country*  </p>
        <input
          value={country}
          onChange={(e) => {
            setCountry(e.target.value);
          }}

        ></input>
        <p>Phone Number*</p>
        <input
          value={phoneNumber}
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
        ></input>
           </div>

        </div>
      <div className="Stuff">
        
          <div 
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            marginTop: "20px",
            gap: "20px"
          }}
          >
            <Radio /> <p style={{

        }} >Home (All Day Delivery)</p>

        <Radio /> <p>Office (Delivery Between 10 AM - 5PM)</p>
          </div>

        <div className="saveCancelContainer" >
          <button className="save">SAVE AND DELIVER HERE</button>
          <p>
            Cancel
          </p>
        </div>
        </div>
        <div className="paymentBtns" >

          <img src={cbtn} alt="cbtn" className="cbtn"  />

          {/* <button className="paymentMethod" >
            <div className="blackcircle">
              <h4
             style={{
                color: "white",
                fontSize: "20px",
                fontWeight: "bold",
                marginTop: "0px"
             }}
              >
                c
              </h4>
            </div>
            PAYMENT METHOD
          </button> */}
          {/* <button className="payNow"
          onClick ={
            () => {
              navigate("/checkout")
            }
          }
          >
          PAY Now
          </button> */}
                    <img src={paybtn} alt="cbtn" className="cbtn paybtn"  onClick ={
            () => {
              navigate("/checkout")
            }
          }/>

        </div>
      </div>

      <div className="blueDiv2" style={{ overflowy: "scrol" }}>
        <h2 className="inTitle">Your order</h2>
        <div className="blackLine2"></div>
        {items.map((item) => {
          return (
            <div className="orderContainer">
              <img src={item.image} alt="cookie1" className="itemimg" />
              <div className="pl">
                <h1 className="orderTitle">{item.title}</h1>
                <h3>
                  <span className="fw-200">Quantity</span> {item.quantity}
                </h3>
                <h3>${item.Price}</h3>
              </div>
            </div>
          );
        })}
        <div className="totalAndStuff1">
        <div className="totalInsideText1">
            <h3>
              <span className="theBreakThingy ">Delivery</span> $20 (Express)
            </h3>
            <h3>
              <span className="theBreakThingy ">Discount</span> -10$
            </h3>
          </div>
          <div className="blackLine2" style={{ width: "670.01px" }} ></div>
          <h1 className="total">
            <span className="totalText">TOTAL</span> ${total}
          </h1>
        </div>
      </div>
      </div>
    </div>
  );
}
