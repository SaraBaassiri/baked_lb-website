import Home from "./Views/Home/Home";
import About from "./Views/About/About";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import React from "react";

function App() {
  React.useEffect(() => {
    if (document.location.pathname !== "/") {
      let title = "Baked - " +
        document.location.pathname.split("/")[1].charAt(0).toUpperCase()
        + document.location.pathname.split("/")[1].slice(1);
      document.title = title;
    }
  });

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
