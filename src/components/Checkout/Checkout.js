import React from "react";
import "./Checkout.css";
import Map from "./GMap/Map";
import Footer from './../Footer/Footer';
import List from './Filters/List';



function Checkout() {
  return (
    <div className="checkout">
      <List/>
      <Map />
      <Footer/>
    </div>
  );
}

export default Checkout;
