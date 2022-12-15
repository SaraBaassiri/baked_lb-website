import React from "react";
import "./checkout.css";

import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Link, useHref, useNavigate } from "react-router-dom";

import tick from "../../Assets/bluetick.svg";
import tickafter from "../../Assets/tickafter.svg";
import cube from "../../Assets/rcube.svg";

import Yummy from "../../Components/popups/yummy"

export default function CheckOut() {
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
  const [creditCardNumber, setCreditCardNumber] = useState("");
  const [CVV, setCVV] = useState("");
  const [expiryDate1, setExpiryDate1] = useState("");
  const [expiryDate2, setExpiryDate2] = useState("");
  const [showYummy, setShowYummy] = useState(false);


  const calculateTotal = () => {
    let totalPrice = 0;
    items.forEach((item) => {
      totalPrice += item.Price * item.quantity;
    });
    setTotal(totalPrice);
  };

  
const handleChange = (e) => {
  let creditCardNumber = e.target.value;
  creditCardNumber = creditCardNumber.replace(/\D/g, '');
  let count = 0;
  let newCreditCardNumber = '';
  for (let i = 0; i < creditCardNumber.length; i++) {
    if (count < 3) {
      newCreditCardNumber += creditCardNumber[i];
      if (i !== 0 && (i + 1) % 4 === 0) {
        newCreditCardNumber += '   -   ';
        count++;
      }
    } else {
      newCreditCardNumber += creditCardNumber[i];
    }
  }
  setCreditCardNumber(newCreditCardNumber);
}



  useEffect(() => {
    calculateTotal();
    document.body.style.zoom = "75%";
  });

  return (
    <div className="Conatainer">
      <h1 className="Title ml-5">Check out</h1>
      <div className="blackLine ml-5"></div>

      <h2 className="ml-5"  style={{ fontSize: "25px" }} >Card Number</h2>
      <p className="ml-5" style={{ fontSize: "22px" }} >Enter the 16-digit card number on the card</p>

    <div className="inner" >
      <div className="infoContainer">
        <div className="BigInputCard" > 
        
        <div className="masterLogoContainer" >
        <div className="masterCardLogoCircleOne"></div>
        <div className="masterCardLogoCircleTwo"></div>
        </div>
        <div className="inputCard" >

        <input
        className="inputCardNumber"
      type="text"
      value={creditCardNumber}
      onChange={handleChange}
      maxLength="37"
    />

            

        </div>

        <img src={ showYummy ? tickafter : tick } alt="tick" style={{ marginRight: "20px" }} />

        </div>
        
        <div className="inputContainer" > 

        <div className="inputContainer1" >
          <div className="textContainer1" >
            <h2 className="inputTitle" >CVV Number</h2>
            <p className="inputText" >Enter the 3-digit number on the back of the card</p>
            </div>
        <div className="CVVInput" >
            <input
            className="inputCVV"
            type="text"
            onChange={
              (e) => {
                setCVV(e.target.value);
              }
            }
            value={CVV}
            maxLength="3"
          />
                      <img src={cube} alt="tick" style={{ 
                        
                       }} />

          
        </div>

          </div>
        
        </div>

        <div className="inputContainer" >
            <div className="textContainer2" >
              <h2 className="inputTitle" >Expiry Date</h2>
              <p className="inputText" >Enter the expiration date on the card</p>
            </div>
            <div className="inputDate" >
            <input
            className="InputDate"
            type="text"
            onChange={
              (e) => {
                setExpiryDate1(e.target.value);
              }
            }
            value={expiryDate1}
            maxLength="2"
          />
          <p style={{
            fontSize: "50px",
            color: "#CCCACA"
          }} >/</p>
          <input
            className="InputDate"
            type="text"
            onChange={
              (e) => {
                setExpiryDate2(e.target.value);
              }
            }
            value={expiryDate2}
            maxLength="2"
          />
          </div>

          </div>
          

          <div className="inputContainer" > 

        <div className="inputContainer1" >
          <div className="textContainer1" >
            <h2 className="inputTitle" >Password</h2>
            <p className="inputText" >Enter your Dynamic password</p>
            </div>
            <div className="CVVInput" >
            <input
            className="inputCVV"
            type="password"
                      />
                      
                      <img src={cube} alt="tick" style={{ 
                       
                      }} />
          
          </div>
          

          </div>
          
        
        </div>

        <div className="paymentBtns" >

          <button className="paymentMethod" 
            onClick={() => setShowYummy(true)}
          >
          Proceed with payment
          </button>

          {showYummy && <Yummy />}
          

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
