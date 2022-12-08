import React from "react";
import "./Cart.css"

//import cookie svgs

import c1 from "../../Assets/cookie1.svg"
import c2 from "../../Assets/cookie2.svg"
import c3 from "../../Assets/cookie3.svg"


export default function Cart() {
  return <div
  className="Conatainer"
  >
    <h1 className="Title ml-5" >Shopping Cart</h1>
    <div className="blackLine ml-5" ></div>
    <div className="blueDiv" >
        <h2 className="inTitle" >Your order</h2>
        <div className="blackLine2"></div>
        <div className="orderContainer">
          <img src={c1} alt="cookie1"/>
          <div className="pl" >
          <h1 className="orderTitle" >Chocolate Cookies</h1>
          <h3><span className="fw-200">Quantity</span>  20</h3>
          <h3>10$ x 20</h3>
          </div>
          
        </div>
        <div className="blackLine2"  ></div>
        <div className="orderContainer ">
          <img src={c2} alt="cookie1"/>
          <div className="pl" >
          <h1 className="orderTitle" >Single Macron</h1>
          <h3><span className="fw-200">Quantity</span>  2</h3>
          <h3>5$ x 2</h3>
          </div>
          
        </div>
        <div className="blackLine2"  ></div>
        <div className="orderContainer">
          <img src={c3} alt="cookie1"/>
          <div className="pl" >
          <h1 className="orderTitle" >Single Macron</h1>
          <h3><span className="fw-200">Quantity</span>  2</h3>
          <h3>5$ x 2</h3>
          </div>          
        </div>
        <div className="blackLine2"  ></div>
          <div className="totalAndStuff" >
            
            <div className="totalInsideText" >
            <h3><span className="theBreakThingy " >Delivery</span> $20 (Express)</h3>
            <h3><span className="theBreakThingy " >Discount</span> -10$</h3>
            </div>
            <h1 className="total" ><span className="totalText">TOTAL</span> $220.00</h1>
          </div>
    </div>
    <div className="btnContainer">
    <button 
    className="proceedbtn"
    >
      Proceed To Payment
    </button>
    </div>
  </div>;
}
