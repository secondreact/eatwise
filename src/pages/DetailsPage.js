import React, { Component } from "react";
import AllergensSection from "../Components/ProductDetails/AllergensSection";
import Contains from "../Components/ProductDetails/ContainsIngredients";
import NutrientLevels from "../Components/ProductDetails/NutrientLevels";
import ProductCard from "../Components/ProductResults/ProductCard";
import "../Components/ProductDetails/Productdetails.scss";

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
          <h3>Product Information</h3>
          <div className="main-product-info">
            <ProductCard
              code={this.state.product?.code}
              image={this.state.product?.image_front_url}
              productName={this.state.product?.product_name}
              brand={this.state.product?.brands}
            />
          </div>
          <div className="main-product-info">
            <Contains
              contains={this.state.product?.ingredients_analysis_tags}
            />

            <AllergensSection allergens={this.state.product?.allergens_tags} />
            <NutrientLevels
              nutrientLevels={this.state.product?.nutrient_levels}
            />
            {/* <BasicInformation /> */}
          </div>
        </div>
      </div>
    );
  }
}
