import React, { Component } from "react";
import AllergensSection from "../Components/ProductDetails/AllergensSection";
import Contains from "../Components/ProductDetails/ContainsIngredients";

// you can use this test product code: https://world.openfoodfacts.org/api/v0/product/3017620422003

export default class DetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
    };
  }

  getProductInformation(code) {
    fetch(`https://world.openfoodfacts.org/api/v0/product/${code}`)
      .then((data) => data.json())
      .then((response) => {
        this.setState({ product: response.product });
      });
  }

  componentDidMount() {
    let productCode = this.props.match.params.code;
    this.getProductInformation(productCode);
  }

  render() {
    return (
      <div>
        <div>
          <h4>Details Page test</h4>
          <img
            className="details-image"
            src={this.state.product?.image_front_url}
            alt={`${this.state.product?.product_name}`}
          />
          <h2>{this.state.product?.product_name}</h2>
          <h3>{this.state.product?.brands}</h3>
          <h4>This product contains</h4>
          <Contains contains={this.state.product?.ingredients_analysis_tags} />
          <h4>Allergens Information</h4>
          <AllergensSection allergens={this.state.product?.allergens_tags} />
          {/* <NutrientLevels nutrientLevels={this.state.product?.nutrient_levels} /> */}
          {/* <BasicInformation /> */}
        </div>
      </div>
    );
  }
}
