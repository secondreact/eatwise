import React, { Component } from "react";
import "../Components/ProductResults/Productinfo.css";
// import "../Components/Searchbar/Searchbar.scss";
import ProductCard from "../Components/ProductResults/ProductCard";
import Footer from "../Components/Footer/Footer";
import Filters from "../Components/Filters/Filters";

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
          <div className="search">
            {/* Move it to filters component'.' */}
            <input
              className="search-bar"
              onChange={this.queryChange}
              type="text"
              placeholder="Find products"
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  console.log(event.target.value);
                }
              }}
            ></input>

            {/* <h3>Find products by name:</h3>
            
            <button className="search-button" onClick={this.searchProducts}>
              Search
            </button> */}
          </div>
          <div className="filters-section">
            <h4>Filter products by category:</h4>
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
