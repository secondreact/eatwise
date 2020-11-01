import React, { Component } from "react";
import "./Productinfo.css";

 function ProductCard(props) {
    return (
        <div className="product-card">
          <div>
            <img className="product-image" src={props.image}/>
          </div>
          <h2 className="product-header">{props.productName}</h2>
          <p>{props.brand}</p>
        </div>
    );
}

export default ProductCard;