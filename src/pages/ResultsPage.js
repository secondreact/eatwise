import React, { Component } from "react";
import "../Components/ProductResults/Productinfo.css";
import ProductCard from "../Components/ProductResults/ProductCard";
import Footer from "../Components/Footer/Footer";
import Filters from "../Components/Filters/Filters";

// API ENDPOINT: https://world.openfoodfacts.org/ https://world.openfoodfacts.org/brand/nutella/1.json

export default class ResultsPage extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  // Gets URL from Filters component
  getFilteredProducts = (url) => {
    fetch(url)
      .then((data) => data.json())
      .then((response) => {
        this.setState({ products: response.products });
      })
      .catch((error) => {
        console.error("Found an error!", error);
      });
  };

  render() {
    return (
      <div>
        <div>
          <h2>Explore Products</h2>
          <div className="filters-section">
            <Filters getFilteredProducts={this.getFilteredProducts} />
          </div>
          <div className="results-list">
            {this.state.products.map((item) => {
              return (
                <ProductCard
                  key={item.code}
                  productName={item.product_name}
                  brand={item.brands}
                  image={item.image_small_url}
                  code={item.code}
                />
              );
            })}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
