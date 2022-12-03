import React from "react";
import "./Home.css";

//Svg
import banner1 from "../../Assets/banner1.svg";
import bakerImage from "../../Assets/meetTheBaker.svg";

export default function Home() {
  return (
    <div>
      <header>
        <div
          className="head"
          style={{
            backgroundImage: `url(${banner1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "100%",
            zIndex: "0",
          }}
        >
          {/* textContaner for the header or banner 1 at the top */}
          <div className="textContainer">
            <h1 className="Title">Hey, Sugar!</h1>
            <h3 className="underTheTitle">Give Our Cookies a Try!</h3>
            {/* button  */}
            <button className="tryNowbtn">TRY NOW</button>
          </div>
        </div>
        {/* the rest of the body */}
        <div className="container">
          {/* meet the baker part */}
          <div className="meetTheBaker">
            <img src={bakerImage} alt="bakers img" className="bakerImage" />
            <div className="yellowBlock"></div>
            <div className="bakerText">
              <h1 className="bakerTitle">Meet the Baker</h1>
              <div className="blackLine"></div>
              <p className="bakerDescription">
                Hello! I am Celina, I founded baked because I had a passion for
                baking ever since I was 16. Ironically enough, I do not like
                sweets, but I am passionate about baking, and I love seeing
                people go crazy over what I dough.
              </p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
