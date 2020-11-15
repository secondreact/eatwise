import React, { Component } from "react";
import "./Filters.scss";

export default class Filters extends Component {
  // can these variable be taken from the API as dynamic filters?
  allergens = ["milk", "nuts", "fish", "eggs", "gluten"];
  palmOil = ["with", "without"];

  constructor(props) {
    super(props);
    this.state = {
      allergens: "",
      palmOil: "",
      list: [],
    };
  }

  onAllergensChange = (event) => {
    this.setState({ allergens: event.target.value });
  };

  onPalmOilChange = (e) => {
    let checked = e.target.checked;
    this.setState({ palmOil: e.target.value });
  };

  // findProducts(allergens) {
  //   fetch(
  //     `https://world.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=allergens&tag_contains_0=contains&tag_0=${allergens}&json=true`
  //   )
  //     .then((data) => data.json())
  //     .then((response) => {
  //       // this.setState({ list: response.products });
  //       this.props.handleProductUpdate(response.products);
  //     });
  // }

  filterSearch = () => {
    let url = `https://world.openfoodfacts.org/cgi/search.pl?`;
    // this.findProducts(this.state.allergens);

    if (this.state.allergens) {
      url += `action=process&tagtype_0=allergens&tag_contains_0=does_not_contain&tag_0=${this.state.allergens}&`;
    }
    url += `json=true`;

    this.props.getFilteredProducts(url);
  };

  render() {
    return (
      <>
        <label>Allergens:</label>
        <div className="filters">
          {this.allergens.map((item) => {
            return (
              <div className="filter-input">
                <label htmlFor={item}>No {item}</label>
                <input
                  value={item}
                  type="radio"
                  id={item}
                  checked={this.state.allergens == item}
                  onChange={this.onAllergensChange}
                />
              </div>
            );
          })}

          {/* <h3>Contains Palm Oil</h3> */}
          {/* {this.palmOil.map((item) => {
          return (
            <>
              <label htmlFor={item}>{item}</label>
              <input
                value={item}
                type="radio"
                id={item}
                // checked={this.state.palmOil === item}
                onChange={this.onPalmOilChange}
              />
            </>
          );
        })} */}

          <h3>Your choice allergens: {this.state.allergens} </h3>
          {/* <h3>Your choice palm Oil: {this.state.palmOil} </h3> */}

          <button className="search-button" onClick={this.filterSearch}>
            Search
          </button>
          <>
            {this.state.list?.map((item) => {
              return (
                <>
                  <h4>{item.product_name}</h4>
                  <p>{item.allergens}</p>
                </>
              );
            })}
          </>
        </div>
      </>
    );
  }
}

// List of API Allergens -TOP 6
// en:gluten
// en:soybeans
// en:milk
// en:nuts
// en:eggs
// en:fish
// en:peanuts

// &tagtype_1=nutrition_grades&tag_contains_1=contains&tag_1=A&additives=without&ingredients_from_palm_oil=without
