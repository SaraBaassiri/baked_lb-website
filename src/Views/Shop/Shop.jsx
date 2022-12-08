import React from "react";
import "./Shop.css";
import { Grid } from "@mui/material";
import { Products } from "../Data/Items";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/reducers/CartSlice";

export default function Shop() {
  const dispatch = useDispatch();

  return (
    <div className="shop">
      <div className="titles">
        <h1>Your Favorite Shop</h1>
        <h4>Delve into our best and tastiest Baked products</h4>
      </div>
      <Grid
        container
        spacing={{ xs: 4, md: 3 }}
        columns={{ xs: 4, sm: 12, md: 16 }}
      >
        {Products.map((item, index) => {
          return (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <div className="ShopItem">
                <div
                  className="ShopInnerImage"
                  style={{
                    backgroundColor: `#${item.color}`,
                  }}
                >
                  <img src={item.image} alt="" />
                  <span className="InnerBackground" />
                </div>
                <h2>{item.title}</h2>
                <p>{item.Description}</p>
                <h3 className="price">${item.Price}</h3>
                <div className="LowerItemSection">
                  <div className="AddItem">
                    <p>-</p>
                    <p>0</p>
                    <p>+</p>
                  </div>
                  <button
                    onClick={() => {
                      dispatch(addToCart(item));
                    }}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
