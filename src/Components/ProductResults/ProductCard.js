import React from "react";
import PlaceholderImage from "../../pages/shared/general_images/camera.svg";
import "./Productinfo.scss";
import * as FaIcons from "react-icons/fa";

function ProductCard(props) {
  return (
    <div className="product-card">
      <a href={"./details/" + props.code}>
        <div>
          <div>
            <button className="heart-icon">
              <FaIcons.FaHeart />
            </button>
          </div>
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
                alt={props.productName}
              />
              <div className="placeholder-text">
                <p>No image found</p>
              </div>
            </div>
          )}
        </div>
        <h2 className="product-header">{props.productName}</h2>
        <p>{props.brand}</p>
      </a>
    </div>
  );
}

export default ProductCard;
