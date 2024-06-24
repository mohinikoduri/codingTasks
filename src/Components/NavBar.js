import React from "react";
import { Link } from "react-router-dom";
import "../Styles/NavBar.css";
import TotalPrice from "./TotalPrice";

const Navbar = (props) => {
  return (
    <div className="navBar">
      <div className="home">
        <Link to="/">Home</Link>
      </div>
      <div className="products">
        <Link to="/products">Products</Link>
      </div>
      <div className="about">
        <Link to="/aboutUs">AboutUs</Link>
      </div>
      {/* displaying total price in navbar and calling totalprice page  */}
      <TotalPrice totalPrice={props.totalPrice} visibility={props.visibility} />
    </div>
  );
};

export default Navbar;
