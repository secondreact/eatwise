import React from "react";
import PlaceholderImage from "../../pages/shared/general_images/camera.svg";
import "./Productinfo.scss";
import * as FaIcons from "react-icons/fa";
import { IconContext } from "react-icons";

export default function DetailsBasicCard(props) {
  function handleFavoriteOnClick(event) {
    event.preventDefault();
    props.toggleFavorite(props.product);
  }

  return (
    <>
      <div>
        <IconContext.Provider
          value={{
            color: "#ff6461",
            size: "1.2rem",
            style: { verticalAlign: "middle" },
          }}
        >
          <div className="favorite-icon">
            {props.isFavorite && (
              <button onClick={handleFavoriteOnClick}>
                {props.isFavorite(props.product) ? (
                  <FaIcons.FaHeart />
                ) : (
                  <FaIcons.FaRegHeart />
                )}
              </button>
            )}
          </div>
        </IconContext.Provider>
      </div>
      <div className="details-product-card">
        <div>
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
        <div>
          <h2 className="product-header">{props.product.product_name}</h2>

          <h4>
            <span>Brand: </span>
            {props.product.brands}
          </h4>
        </div>
      </div>
    </>
  );
}
