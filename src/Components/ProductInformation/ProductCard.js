import React, { Component } from "react";
import "./Productinfo.css";

export default class ProductCard extends Component {
  render() {
    return (
      <div className="product-card">
        <img className="img-card" src="https://tinyurl.com/y3telfou"/>
        <h2>Nutella - 825 g</h2>
        <p>Ferrero</p>
      </div>
    );
  }
}
