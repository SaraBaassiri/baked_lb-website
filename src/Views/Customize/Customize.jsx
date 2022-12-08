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
          <div className="CustItem">
            <div className="CustomizeItem">
              <div className="CustomizeInnerImage">
                <img src="/RedHalf.png" alt="" />
                <span className="InnerBackground" />
              </div>
            </div>
            <div className="otherHalf">
              <p>First Half</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={8}>
          <div className="CustomizeItem"></div>
        </Grid>
      </Grid>
    </div>
  );
}
