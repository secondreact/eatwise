import React, { Component } from "react";
import Categories from "../Components/CategoriesButtons/CategoriesButtons";
import "../Components/ProductResults/Productinfo.css";
import "../Components/NavBar/Searchbar.scss";
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
      color: "",
    };

    this.queryChange = this.queryChange.bind(this);
    this.searchProducts = this.searchProducts.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleProductUpdate = this.handleProductUpdate.bind(this);
    this.getFilteredProducts = this.getFilteredProducts.bind(this); // Version v2.0
  }

  loadProducts(brand) {
    fetch(`https://en-en.openfoodfacts.org/brand/${brand}/1.json`)
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

  queryChange(event) {
    this.setState({ query: event.target.value });
  }

  searchProducts() {
    this.loadProducts(this.state.query);
  }

  handleColorChange(color) {
    console.log("calling handleColorChange with " + color);
    this.setState({ color: color });
  }

  handleProductUpdate(products) {
    console.log("updating products, got " + products.length + " products");
    this.setState({ products: products });
  }

  // Version v2.0
  getFilteredProducts(url) {
    fetch(url)
      .then((data) => data.json())
      .then((response) => {
        this.setState({ products: response.products });
      })
      .catch((error) => {
        console.error("Found an error!", error);
      });
  }
  // End Version v2.0

  render() {
    return (
      <div>
        <div>
          <h3>Results Page</h3>
          {/* <h5>Color: {this.state.color}</h5> */}
          <div className="search">
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
          <div>
            <Filters
              handleColorChange={this.handleColorChange}
              handleProductUpdate={this.handleProductUpdate}
              getFilteredProducts={this.getFilteredProducts}
            />
          </div>
          <div className="categories-">{/* <Categories /> */}</div>
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
