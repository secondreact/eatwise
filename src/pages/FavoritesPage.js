import React from "react";
import Footer from "../Components/Footer/Footer";
import ProductCard from "../Components/ProductResults/ProductCard";
import "../index.css";

export default function Favorites(props) {
  return (
    <div>
      <div>
        <h1 className="page-header">My Favorites</h1>
        <div className="results-list">
          {props.favoriteProducts.map((product) => {
            return (
              <ProductCard
                key={product.code}
                product={product}
                toggleFavorite={props.toggleFavorite}
                isFavorite={props.isFavorite}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
