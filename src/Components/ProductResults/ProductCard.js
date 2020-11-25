import React from "react";
import PlaceholderImage from "../../pages/shared/general_images/camera.svg";
import "./Productinfo.scss";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";

export default function ProductCard(props) {
  function handleFavoriteOnClick(event) {
    event.preventDefault();
    props.toggleFavorite(props.product);
  }

  return (
    <div className="product-card">
      <IconContext.Provider
        value={{
          color: "#ff6461",
          size: "1.2rem",
          style: { verticalAlign: "middle" },
        }}
      >
        <Link to={"./details/" + props.product.code}>
          <div>
            <div className="favorite-icon">
              <button onClick={handleFavoriteOnClick}>
                {props.isFavorite(props.product) ? (
                  <FaIcons.FaHeart />
                ) : (
                  <FaIcons.FaRegHeart />
                )}
              </button>
            </div>
            {props.product.image_small_url ? (
              <img
                className="product-image"
                src={props.product.image_small_url}
                alt={props.product.product_name}
              />
            ) : (
              <div className="container">
                <img
                  className="product-image"
                  src={PlaceholderImage}
                  alt={props.product.product_name}
                />
                <div className="placeholder-text">
                  <p>No image found</p>
                </div>
              </div>
            )}
          </div>
          <h2 className="product-header">{props.product.product_name}</h2>
          <p>{props.product.brands}</p>
        </Link>
      </IconContext.Provider>
    </div>
  );
}
