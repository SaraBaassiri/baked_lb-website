import React from "react";
import "./Cart.css";

import { useSelector } from "react-redux";

export default function Cart() {
  const items = useSelector((state) => state.cart.cartItems);

  React.useEffect(() => {
    console.log(items);
  }, [items]);

  return (
    <div className="Conatainer">
      <h1 className="Title ml-5">Shopping Cart</h1>
      <div className="blackLine ml-5"></div>
      <div className="blueDiv">
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
                <h3>10$ x 20</h3>
              </div>
            </div>
          );
        })}
        <div className="blackLine2"></div>
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
            <span className="totalText">TOTAL</span> $220.00
          </h1>
        </div>
      </div>
      <div className="btnContainer">
        <button className="proceedbtn">Proceed To Payment</button>
      </div>
    </div>
  );
}
