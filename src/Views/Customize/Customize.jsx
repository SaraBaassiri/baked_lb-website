import React from "react";
import "./Customize.css";
import { Grid } from "@mui/material";

export default function Customize() {
  const [half, setHalf] = React.useState("1st Half");
  const [crust, setCrust] = React.useState("");

  const handleSecondHalf = () => {
    setHalf("2nd Half");
  };

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
              {half === "1st Half" ? (
                <img src="/RedHalf.png" alt="" />
              ) : (
                <img src="/MNMHALF.png" alt="" />
              )}
              <span className="InnerBackground" />
            </div>
            <div className="otherHalf">
              <p>{half}</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={8}>
          <div className="CustomizeOptions">
            <div className="crust">
              <h5>Choose the Crust</h5>
              <div className="BackGroundRectangle"></div>
              <div className="crustOptions">
                <button
                  onClick={() => {
                    setCrust("Crunchy");
                  }}
                  style={{
                    backgroundColor:
                      crust === "Crunchy" ? "#a796bf" : "#E0D2F5",
                  }}
                >
                  Crunchy
                </button>
                <button
                  onClick={() => setCrust("Crispy")}
                  style={{
                    backgroundColor: crust === "Crispy" ? "#a796bf" : "#E0D2F5",
                  }}
                >
                  Crispy
                </button>
                <button
                  style={{
                    backgroundColor: crust === "Smudgy" ? "#a796bf" : "#E0D2F5",
                  }}
                  onClick={() => setCrust("Smudgy")}
                >
                  Smudgy
                </button>
              </div>
            </div>
            <div className="flavor">
              <h5>Choose the Flavor</h5>
              <div className="BackGroundRectangle"></div>
              <div className="BackGroundRectangle"></div>
              <div className="BackGroundRectangle"></div>
              <div className="BackGroundRectangle"></div>
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
              <div className="BackGroundRectangle"></div>
              <div className="BackGroundRectangle"></div>
              <div className="BackGroundRectangle"></div>
              <div className="BackGroundRectangle"></div>
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
              {half === "1st Half" ? (
                <button onClick={handleSecondHalf}>
                  Proceed with the next half
                </button>
              ) : (
                <div className="InnerContent">
                  <div className="AddOrRemove">
                    <p>-</p>
                    <p>0</p>
                    <p>+</p>
                  </div>
                  <div className="InnerConButton">Customize another</div>
                  <div className="InnerConButton">Add to cart</div>
                </div>
              )}
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
