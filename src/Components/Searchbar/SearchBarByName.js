import React, { Component } from "react";
import "./Searchbar.scss";

// TBD NEED TO FIND OUT IF I CAN SEPARATE THIS FROM THE RESULTS PAGE.
export default class SearchBarByName extends Component {
  constructor(props) {
    super(props);
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

  queryChange = (event) => {
    this.setState({ query: event.target.value });
  };

  searchProducts = () => {
    this.loadProducts(this.state.query);
  };

  render() {
    return (
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
    );
  }
}
