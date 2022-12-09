import React from "react";
import "./Customize.css";
import { Grid } from "@mui/material";

export default function Customize() {
  return (
    <div className="customize">
      <div className="titles">
        <h1>Half Your Cookies according to your taste</h1>
        <h4>Mix and Match</h4>
      </div>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
            <div className="CustomizeItem">
              <div className="CustomizeInnerImage">
                <img src="/RedHalf.png" alt="" />
                <span className="InnerBackground" />
              </div>
              <div className="otherHalf">
                <p>First Half</p>
              </div>
            </div>
        </Grid>
        <Grid item xs={8}>
            <div className="CustomizeOptions">
            <div className="crust">
                <h5>Choose the Crust</h5>
                <div className="crustOptions">
                    <button>Crunchy</button>
                    <button>Crispy</button>
                    <button>Smudgy</button>
                </div>
            </div>
            <div className="flavor">
                <h5>Choose the Flavor</h5>
                <div className="flavorOptions">
                    <button>Red Velvet</button>
                    <button>Chocolate</button>
                    <button>Hazelnut</button>
                    <button>Coffee</button>
                    <button>Vanilla</button>
                    <button>Peanut</button>
                    <button>Raspberry</button>
                    <button>Strawberry</button>
                    <button>Banana</button>
                </div>
            </div>
            <div className="topping">
                <h5>Choose the Topping</h5>
                <div className="toppingOptions">
                    <button>Peanuts</button>
                    <button>Chocolate</button>
                    <button>Hazelnut</button>
                    <button>Coffee</button>
                    <button>White Chocolate</button>
                    <button>Almonds</button>
                    <button>Raspberry</button>
                    <button>Strawberry</button>
                    <button>Berries</button>
                </div>
            </div>
            <div className="secondHalf">
                <button>Proceed with the second half</button>
            </div>
            </div>
        </Grid>
      </Grid>
    </div>
  );
}
