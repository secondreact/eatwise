import React, { Component } from "react";
import "./Filters.scss";

export default class Filters extends Component {
  listOfAllergens = ["milk", "nuts", "fish", "eggs", "gluten"];
  palmOilOptions = ["with", "without"];

  constructor(props) {
    super(props);
    this.state = {
      allergens: "",
      palmOil: "without",
      list: [],
    };
  }

  onAllergensChange = (event) => {
    this.setState({ allergens: event.target.value });
  };

  onPalmOilChange = (event) => {
    this.setState({ palmOil: event.target.value });
  };

  filterSearch = () => {
    let url = `https://world.openfoodfacts.org/cgi/search.pl?action=process&search_terms=Nutella&search_simple=1`;
    // this.findProducts(this.state.allergens);

    if (this.state.allergens) {
      url += `&tagtype_0=allergens&tag_contains_0=does_not_contain&tag_0=${this.state.allergens}`;
    }

    if (this.state.palmOil) {
      url += `&ingredients_from_palm_oil=${this.state.palmOil}`;
    }

    url += `&json=true`;

    this.props.getFilteredProducts(url);
  };

  render() {
    return (
      <>
        <label>Allergens:</label>
        <div className="filters">
          {this.listOfAllergens.map((item, i) => {
            return (
              <div key={i} className="filter-input">
                <label htmlFor={item}>No {item}</label>
                <input
                  value={item}
                  type="radio"
                  key={item}
                  checked={this.state.allergens === item}
                  onChange={this.onAllergensChange}
                />
              </div>
            );
          })}

          <h3>Contains Palm Oil</h3>
          {this.palmOilOptions.map((item, i) => {
            return (
              <div key={i}>
                <label htmlFor={item}>{item}</label>
                <input
                  value={item}
                  type="radio"
                  id={item}
                  checked={this.state.palmOil === item}
                  onChange={this.onPalmOilChange}
                />
              </div>
            );
          })}

          <h3>Your choice allergens: {this.state.allergens} </h3>
          {/* <h3>Your choice palm Oil: {this.state.palmOil} </h3> */}

          <button className="search-button" onClick={this.filterSearch}>
            Search
          </button>
          <>
            {this.state.list?.map((item, index) => {
              return (
                <div key={index}>
                  <h4>{item.product_name}</h4>
                  <p>{item.allergens}</p>
                </div>
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
