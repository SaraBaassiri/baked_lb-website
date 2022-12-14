import React from "react";
import "./Shop.css";
import { Grid } from "@mui/material";
import { Products } from "../Data/Items";
import Item from "../../Components/Item/Item";

import { useSelector } from "react-redux";
import SpinningWheel from "../../Components/Wheel/Wheel";

export default function Shop() {
  const items = useSelector((state) => state.cart.Items);
  const [visible, setVisible] = React.useState(true);

  return (
    <div className="shop">
      <div className="titles">
        <h1>Your Favorite Shop</h1>
        <h4>Delve into our best and tastiest Baked products</h4>
      </div>
      {visible && (
        <div className="wheelContainer">
          <div className="wheel">
            <SpinningWheel />
          </div>

          <div className="ContainerInfo">
            <div className="closeWheelTop">
              <p
                onClick={() => {
                  setVisible(false);
                }}
              >
                X
              </p>
            </div>
            <h3>Spin The Wheel</h3>
            <span className="WheelLine"></span>
            <h4>Hungry for more?</h4>
            <p>
              Sign up to try our spin the wheel for different offers for your
              first order, exclusive offers, and more!
            </p>
            <div>
              <div>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Second Name" />
              </div>
              <input type="text" placeholder="Enter Your Email Address" />
              <button>Subscribe Now</button>
            </div>
          </div>
        </div>
      )}

      <Grid
        container
        spacing={{ xs: 4, md: 3 }}
        columns={{ xs: 4, sm: 12, md: 16 }}
      >
        {Products.map((item, index) => {
          return (
            <Grid item xs={2} sm={4} md={4} key={index}>
              {items.find((i) => i.id === item.id) ? (
                <Item
                  item={item}
                  isAdded={true}
                  amount={items.find((i) => i.id === item.id).quantity}
                />
              ) : (
                <Item item={item} isAdded={false} amount={0} />
              )}
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
