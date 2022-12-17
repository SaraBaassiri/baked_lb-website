import React from "react";

import Home from "./Views/Home/Home";
import Cart from "./Views/Cart/Cart";
import Cart2 from "./Views/Cart/cart2/Cart2";

import CheckOut from "./Views/CheckOut/checkout";

import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Contact from "./Views/ContactUs/Contact";
import Customize from "./Views/Customize/Customize";
import Shop from "./Views/Shop/Shop";
import ShopItem from "./Views/Shop/Shop Specific/ShopItem";

import { BsXLg } from "react-icons/bs";

function App() {
  const [visible, setVisible] = React.useState(true);
  const wheel = React.useRef(null);

  React.useEffect(() => {
    if (document.location.pathname !== "/") {
      let title =
        "Baked - " +
        document.location.pathname.split("/")[1].charAt(0).toUpperCase() +
        document.location.pathname.split("/")[1].slice(1);
      document.title = title;
    } else {
      document.title = "Baked - Home";
    }
  });


  React.useEffect(() => {
    spinRandom();
  }, []);

  const spinRandom = () => {
    const random = Math.floor(Math.random() * 360);
    wheel.current.style.transform = `rotate(${random}deg)`;
    wheel.current.style.transition = "all 3s ease-out";
    setTimeout(() => {
      wheel.current.style.transition = "none";
    }, 5000);
  };


  return (
    <div className="App">
      <Navbar />
      {
        visible &&
        <div className="wheelContainer">
          <div className="wheel">
            {/* <SpinningWheel /> */}
            <span className="selectorWheel">&#9660;</span>
            <img ref={wheel} src="/wheel.png" alt="Group-1" border="0" />
          </div>

          <div className="ContainerInfo">
            <div
              className="closeWheelTop"
              onClick={() => {
                setVisible(false);
              }}
            >
              <BsXLg />
            </div>
            <h2>Spin The Wheel</h2>
            <span className="WheelLine"></span>
            <h4>Hungry for more?</h4>
            <p>
              Sign up to try our spin the wheel for different offers for your
              first order, exclusive offers, and more!
            </p>
            <div className="InnerInfoContainer">
              <div className="NameInputs">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
              </div>
              <input
                type="text"
                placeholder="Enter Your Email Address"
                className="EmailInputWheel"
              />
              <button>Subscribe Now</button>
            </div>
          </div>
        </div>

      }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/my-cart" element={<Cart />} />
        <Route path="/my-cart2" element={<Cart2 />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<ShopItem />} />
        <Route path="/customize" element={<Customize />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
