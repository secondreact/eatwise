import React from "react";
import "./Productinfo.css";

function ProductCard(props) {
  return (
    <a href={"./details/" + props.code}>
      <div className="product-card">
        <div>
          <img
            className="product-image"
            src={props.image}
            alt={props.productName}
          />
        </div>
        <h2 className="product-header">{props.productName}</h2>
        <p>{props.brand}</p>
      </div>
    </a>
  );
}

export default ProductCard;
