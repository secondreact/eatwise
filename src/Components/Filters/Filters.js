import React, { Component } from "react";

export default class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allergens: "",
      list: [],
    };
    this.onFilterChange = this.onFilterChange.bind(this);
    this.filterSearch = this.filterSearch.bind(this);

    console.log("Antes");
    this.props.handleColorChange("blue");
    console.log("Despues");
  }

  onFilterChange(event) {
    this.setState({ allergens: event.target.value });
  }

  findProducts(allergens) {
    fetch(
      `https://world.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=allergens&tag_contains_0=contains&tag_0=${allergens}&json=true`
    )
      .then((data) => data.json())
      .then((response) => {
        // this.setState({ list: response.products });
        this.props.handleProductUpdate(response.products);
      });
  }

  filterSearch() {
    let url = `https://world.openfoodfacts.org/cgi/search.pl?`;
    // this.findProducts(this.state.allergens);

    if (this.state.allergens) {
      url += `action=process&tagtype_0=allergens&tag_contains_0=contains&tag_0=${this.state.allergens}&`;
    }

    url += `json=true`;

    this.props.getFilteredProducts(url);
  }

  render() {
    return (
      <div>
        <h2>Filter options: </h2>
        <label>Allergens:</label>
        <br />
        <label htmlFor="milk">Milk</label>
        <input
          value="milk"
          type="radio"
          id="milk"
          checked={this.state.allergens == "milk"}
          onChange={this.onFilterChange}
        />

        <label htmlFor="nuts">Nuts</label>
        <input
          value="nuts"
          type="radio"
          id="nuts"
          checked={this.state.allergens == "nuts"}
          onChange={this.onFilterChange}
        />

        <label htmlFor="gluten">Gluten</label>
        <input
          value="gluten"
          type="radio"
          id="gluten"
          checked={this.state.allergens == "gluten"}
          onChange={this.onFilterChange}
        />

        <label htmlFor="fish">Fish</label>
        <input
          value="fish"
          type="radio"
          id="fish"
          checked={this.state.allergens == "fish"}
          onChange={this.onFilterChange}
        />

        <label htmlFor="eggs">Eggs</label>
        <input
          value="eggs"
          type="radio"
          id="eggs"
          checked={this.state.allergens == "eggs"}
          onChange={this.onFilterChange}
        />

        <h3>Your choice: {this.state.allergens} </h3>

        <button onClick={this.filterSearch}>Search</button>
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
