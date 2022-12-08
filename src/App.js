import Home from "./Views/Home/Home";
import Cart from "./Views/Cart/Cart";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import React from "react";
import Contact from "./Views/ContactUs/Contact";

function App() {
  React.useEffect(() => {
    if (document.location.pathname !== "/") {
      let title = "Baked - " +
        document.location.pathname.split("/")[1].charAt(0).toUpperCase()
        + document.location.pathname.split("/")[1].slice(1);
      document.title = title;
    } else {
      document.title = "Baked - Home";
    }
  });

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/my-cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
