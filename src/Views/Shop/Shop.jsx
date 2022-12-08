import React from "react";
import "./Shop.css";
import { Grid } from "@mui/material";

export default function Shop() {
  return (
    <div className="shop">
      <Grid
        container
        spacing={{ xs: 4, md: 3 }}
        columns={{ xs: 4, sm: 12, md: 16 }}
      >
        <Grid item xs={2} sm={4} md={4}>
          <div className="ShopItem">
            <div className="ShopInnerImage1">
              <img src="/BlueCup.png" alt="" />
              <span className="InnerBackground" />
            </div>
            <h2>Cupcake</h2>
            <p>
              A very smoochy buttered piece of cake, with a frosty topic that
              you would fall for.
            </p>
            <h3 className="price">$0</h3>
            <div className="LowerItemSection">
              <div className="AddItem">
                <p>-</p>
                <p>0</p>
                <p>+</p>
              </div>
              <button>Buy Now</button>
            </div>
          </div>
        </Grid>

        {/* New Item */}
        <Grid item xs={2} sm={4} md={4}>
          <div className="ShopItem">
            <div className="ShopInnerImage2">
              <img src="/RedCake.png" alt="" />
              <span className="InnerBackground" />
            </div>
            <h2>Red Velvet Cookie</h2>
            <p>
              A bright red velvet cookies filled with M&M’s, gooey melty dark
              chocolate chips and rich dark chunks.
            </p>
            <h3>0$</h3>
            <div className="LowerItemSection">
              <div className="AddItem">
                <p>-</p>
                <p>0</p>
                <p>+</p>
              </div>
              <button>Buy Now</button>
            </div>
          </div>
        </Grid>

        {/* End new Item */}
      </Grid>
    </div>
  );
}
