import React, { Component } from "react";
import "../Components/ProductResults/Productinfo.css";
import ProductCard from "../Components/ProductResults/ProductCard";
import Footer from "../Components/Footer/Footer";
import Filters from "../Components/Filters/Filters";
import SearchBarByName from "../Components/Searchbar/SearchBarByName";

// API ENDPOINT: https://world.openfoodfacts.org/ https://world.openfoodfacts.org/brand/nutella/1.json

export default class ResultsPage extends Component {
  constructor() {
    super();
    this.state = {
      query: "",
      products: [],
    };
  }

  loadProducts(productName) {
    fetch(
      `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${productName}&search_simple=1&json=true`
    )
      .then((data) => data.json())
      .then((response) => {
        this.setState({ products: response.products });
      })
      .catch((error) => {
        console.error("Found an error!", error);
      });
  }

  componentDidMount() {
    // this.loadProducts(this.state.query);
  }

  queryChange = (event) => {
    this.setState({ query: event.target.value });
  };

  searchProducts = () => {
    this.loadProducts(this.state.query);
  };

  handleProductUpdate = (products) => {
    console.log("updating products, got " + products.length + " products");
    this.setState({ products: products });
  };

  // Version v2.0
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
  // End Version v2.0

  render() {
    return (
      <div>
        <div>
          {/* version 3 test separate searchbar component  */}
          {/* <SearchBarByName
            onChange={this.queryChange}
            onClick={this.searchProducts}
          /> */}
          <div className="search">
            <h3>Find products by name:</h3>
            <input
              className="search-bar"
              onChange={this.queryChange}
              type="text"
              placeholder="Find products"
            ></input>
            <button className="search-button" onClick={this.searchProducts}>
              Search
            </button>
          </div>
          <div className="filters-section">
            <h4>Filter products by category:</h4>
            <Filters
              handleProductUpdate={this.handleProductUpdate}
              getFilteredProducts={this.getFilteredProducts}
            />
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

// REVIEW AND DEFINE CATEGORIES
{
  /* <div className="categories-">
            <Categories />
          </div> */
}
