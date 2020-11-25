import React from "react";
import Footer from "../Components/Footer/Footer";
import ProductCard from "../Components/ProductResults/ProductCard";
import "../index.css";

export default function Favorites(props) {
  return (
    <div>
      <div>
        <h2>My Favorites</h2>
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
