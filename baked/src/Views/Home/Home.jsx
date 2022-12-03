import React from "react";
import "./Home.css";

//Svg
import banner1 from "../../Assets/banner1.svg";
import bakerImage from "../../Assets/meetTheBaker.svg";

export default function Home() {
  return (
    <div>
      <div className="Hero">
        <div className="HeroImage">
          <img src={banner1} alt="banner1" />
        </div>
        <div className="HeroInner">
          <div className="HeroText">
            <h1 className="Hero-Title">Hey, Sugar!</h1>
            <h3 className="Hero-SubTitle">Give Our Cookies a Try!</h3>
            <button className="HeroButton">TRY NOW</button>
          </div>
        </div>
      </div>

      <div className="MeetTheBaker">
        <div className="BakerImage">
          <img src={bakerImage} alt="banner1" />
          <span className="YellowBackground"></span>
        </div>
        <div className="BakerInner">
          <div className="BakerText">
            <h1 className="Baker-Title">Meet the Baker</h1>
            <div className="BlackLine"></div>
            <p className="Baker-Des">
              Hello! I am Celina, I founded baked because I had a passion for
              baking ever since I was 16. Ironically enough, I do not like
              sweets, but I am passionate about baking, and I love seeing people
              go crazy over what I dough.
            </p>
            <button className="BakerButton">TRY NOW</button>
          </div>
        </div>
      </div>

      <div className="Products">
        <div className="InnerProducts">
          <h1>Products</h1>
          <div className="ProductsLine"></div>
        </div>
      </div>
    </div>
  );
}
