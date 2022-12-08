import React from "react";
import "./Shop.css";
import { Grid } from "@mui/material";

export default function Shop() {
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
            <h3 className="price">$5</h3>
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
              <img src="/RedCake.png" alt="Red Velvet Cookie" />
              <span className="InnerBackground" />
            </div>
            <h2>Red Velvet Cookie</h2>
            <p>
              A bright red velvet cookies filled with M&M’s, gooey melty dark
              chocolate chips and rich dark chunks.
            </p>
            <h3 className="price">$2.5</h3>
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

        <Grid item xs={2} sm={4} md={4}>
          <div className="ShopItem">
            <div className="ShopInnerImage3">
              <img src="/macrons.png" alt="Macrons" />
              <span className="InnerBackground" />
            </div>
            <h2>Macrons</h2>
            <p>
              A very distinct colorful juicy piece of cake, 
              as each piece reflects the taste of a yummy fruity element.
            </p>
            <h3 className="price">$10</h3>
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

        <Grid item xs={2} sm={4} md={4}>
          <div className="ShopItem">
            <div className="ShopInnerImage4">
              <img src="/MandM.png" alt="Rainbow Cake" />
              <span className="InnerBackground" />
            </div>
            <h2>Rainbow Cake</h2>
            <p>
              A very distinct colorful juicy piece of cake, 
              as each piece reflects the taste of a yummy fruity element.
            </p>
            <h3 className="price">$10</h3>
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

        <Grid item xs={2} sm={4} md={4}>
          <div className="ShopItem">
            <div className="ShopInnerImage2">
              <img src="/cinna.png" alt="Cinnamon Roll" />
              <span className="InnerBackground" />
            </div>
            <h2>Cinnamon Roll</h2>
            <p>
              A very smoochy buttered piece of cake, 
              with a frosty topic that you would fall for.
            </p>
            <h3 className="price">$5</h3>
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

        <Grid item xs={2} sm={4} md={4}>
          <div className="ShopItem">
            <div className="ShopInnerImage4">
              <img src="/FudgeBrownie.png" alt="Fudge Brownie" />
              <span className="InnerBackground" />
            </div>
            <h2>Fudge Brownie</h2>
            <p>
              A bright red velvet cookies filled with M&M’s, 
              gooey melty dark chocolate chips and rich dark chunks.
            </p>
            <h3 className="price">$2.5</h3>
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
