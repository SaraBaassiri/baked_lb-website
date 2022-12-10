import React from "react";
import "./Cart.css";

import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Link, useHref, useNavigate } from "react-router-dom";

import bg from "../../Assets/whitebg.svg";

export default function Cart() {
  const navigate = useNavigate();
  const items = useSelector((state) => state.cart.Items);
  const [total, setTotal] = useState(0);
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
      <div className="blueDiv" style={{ overflowy: "scrol" }}>
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
        {total > 0 ? (
          <button
            className="proceedbtn"
            onClick={() => {
              if (total > 0) {
                navigate("/my-cart2");
              }
            }}
          >
            Proceed To Payment
          </button>
        ) : (
          <button
            className="proceedbtn"
            onClick={() => {
              if (total === 0) {
                navigate("/shop");
              }
            }}
          >
            Buy
          </button>
        )}
      </div>
    </div>
  );
}
