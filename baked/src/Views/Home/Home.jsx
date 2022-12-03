import React from "react";
import "./Home.css";

//Svg
import banner1 from "../../Assets/banner1.svg";
import bakerImage from "../../Assets/meetTheBaker.svg";

export default function Home() {
  return (
    <div>
      <div className="head">
        <img src={banner1} alt="banner1" className="headImage" />
        <div className="textContainer">
          <h1 className="Title">Hey, Sugar!</h1>
          <h3 className="underTheTitle">Give Our Cookies a Try!</h3>
          <button className="tryNowbtn">TRY NOW</button>
        </div>
      </div>
      <div className="containerMeet">
        <div className="meetTheBaker">
          <div className="ImageWithBackground">
            <img src={bakerImage} alt="bakers img" className="bakerImage" />
            <div className="yellowBlock"></div>
          </div>
          <div className="bakerText">
            <h1 className="bakerTitle">Meet the Baker</h1>
            <div className="blackLine"></div>
            <p className="bakerDescription">
              Hello! I am Celina, I founded baked because I had a passion for
              baking ever since I was 16. Ironically enough, I do not like
              sweets, but I am passionate about baking, and I love seeing people
              go crazy over what I dough.
            </p>
            <button className="tryNowbtnYellow">TRY NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
}
