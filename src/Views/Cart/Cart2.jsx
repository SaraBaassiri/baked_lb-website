import React from "react";
import "./Cart.css";

import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

export default function Cart() {
  const items = useSelector((state) => state.cart.Items);
  const [total, setTotal] = useState(0);
  const calculateTotal = () => {
    let totalPrice = 0;
    items.forEach(item => {
      totalPrice += item.Price * item.quantity;
    });
    setTotal(totalPrice);
  }

  useEffect(() => {
    calculateTotal();
  }, [items]);

  return (
    <div className="Conatainer">
      <h1 className="Title ml-5">Shopping Cart</h1>
      <div className="blackLine ml-5"></div>
      <div className="blueDiv" style={{ overflowy: "scrol" }} >
        <h2 className="inTitle">Your order</h2>
        <div className="blackLine2"></div>
        {items.map((item) => {
          return (
            <div className="orderContainer">
              <img src={item.image} alt="cookie1" />
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
        <div className="totalAndStuff">
          <div className="totalInsideText">
            <h3>
              <span className="theBreakThingy ">Delivery</span> $20 (Express)
            </h3>
            <h3>
              <span className="theBreakThingy ">Discount</span> -10$
            </h3>
          </div>
          <h1 className="total">
            <span className="totalText">TOTAL</span> ${total}
          </h1>
        </div>
      </div>
      <div className="btnContainer">
        <button className="proceedbtn" onClick={calculateTotal}>Proceed To Payment</button>
      </div>
    </div>
  );
}