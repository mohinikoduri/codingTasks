import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home.js";
import Products from "./Components/Products.js";
import AboutUs from "./Components/AboutUs.js";
import Navbar from "./Components/NavBar.js";
import TextExample from "./Components/TextExample.js";
import { useState } from "react";
function App() {
  const [totalPrice, setTotalPrice] = useState(0);
  //setting totalprice visibility hidden initially
  const [visibility, setVisibility] = useState("hidden");
  return (
    <div className="App">
      <Navbar totalPrice={totalPrice} visibility={visibility} />

      <Routes>
        <Route
          exact
          path="/"
          element={<Home setVisibility={setVisibility} />}
        />
        <Route
          path="/products"
          element={
            <Products
              totalPrice={totalPrice}
              setTotalPrice={setTotalPrice}
              setVisibility={setVisibility}
            />
          }
        />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/example" element={<TextExample />} />
      </Routes>
    </div>
  );
}

export default App;
