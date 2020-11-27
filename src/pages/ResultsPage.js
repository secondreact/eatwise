import React, { Component } from "react";
import "../Components/ProductResults/Productinfo.scss";
import ProductCard from "../Components/ProductResults/ProductCard";
import Footer from "../Components/Footer/Footer";
import Filters from "../Components/Filters/Filters";

// API ENDPOINT: https://world.openfoodfacts.org/ https://world.openfoodfacts.org/brand/nutella/1.json

export default class ResultsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      isLoading: false,
    };
  }
  // Gets URL from Filters component

  getFilteredProducts = (url) => {
    this.setState({ isLoading: true });
    fetch(url)
      .then((data) => data.json())
      .then((response) => {
        this.setState({ products: response.products });
      })
      .catch((error) => {
        console.error("Found an error!", error);
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  render() {
    return (
      <div>
        <div className="main-pages-container">
          <h2>Explore Products</h2>
          <div className="filters-section">
            <Filters getFilteredProducts={this.getFilteredProducts} />
          </div>
          {this.state.isLoading && <div class="loader"></div>}
          <div className="results-list">
            {this.state.products.map((item) => {
              return (
                <ProductCard
                  key={item.code}
                  product={item}
                  toggleFavorite={this.props.toggleFavorite}
                  isFavorite={this.props.isFavorite}
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
