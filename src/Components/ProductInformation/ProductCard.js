import React, { Component } from "react";
import "./Productinfo.css";

 function ProductCard(props) {
    return (
        <div className="product-card">
          <div>
            <img className="product-image" src={props.image}/>
          </div>
          <h2>{props.product_name_en}</h2>
          <p>{props.brands_tags}</p>
        </div>
    );
}

export default ProductCard;