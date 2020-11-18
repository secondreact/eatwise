import React from "react";
import PlaceholderImage from "../../pages/shared/general_images/camera.svg";
import "./Productinfo.css";

function ProductCard(props) {
  return (
    <a href={"./details/" + props.code}>
      <div className="product-card">
        <div>
          {props.image ? (
            <img
              className="product-image"
              src={props.image}
              alt={props.productName}
            />
          ) : (
            <div className="container">
              <img
                className="product-image"
                src={PlaceholderImage}
                alt="No image found"
              />
              <div className="placeholder-text">
                <p>No image found</p>
              </div>
            </div>
          )}
        </div>
        <h2 className="product-header">{props.productName}</h2>
        <p>{props.brand}</p>
      </div>
    </a>
  );
}

export default ProductCard;
