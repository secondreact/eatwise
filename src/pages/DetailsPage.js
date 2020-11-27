import React, { Component } from "react";
import AllergensSection from "../Components/ProductDetails/AllergensSection";
import Contains from "../Components/ProductDetails/ContainsIngredients";
import NutrientLevels from "../Components/ProductDetails/NutrientLevels";
import "../Components/ProductDetails/Productdetails.scss";
import IngredientsCard from "../Components/IngredientsCard";
import NutritionsCard from "../Components/NutritionsCard";
import ScoreCard from "../Components/ScoreCard";
import DetailsBasicCard from "../Components/ProductResults/DetailsBasicCard";

export default class DetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      ingredients: [],
      nutritions: [],
      score: [],
      catTag: [],
    };
  }

  getProductInformation(code) {
    fetch(`https://world.openfoodfacts.org/api/v0/product/${code}`)
      .then((data) => data.json())
      .then((response) => {
        this.setState({
          product: response.product,
          ingredients: response?.product?.ingredients,
          nutritions: response?.product?.nutriments,
          score: response?.product?.nutriscore_data,
          catTag: response.product.categories_tags,
        });
      });
  }

  componentDidMount() {
    let productCode = this.props.match.params.code;
    this.getProductInformation(productCode);
  }

  render() {
    const CatTag = this.state.catTag?.toString().replace(/en:/g, " ");
    //
    // pictures X function getPic = correct image
    const getPic = (pic, en, de, all) => {
      const notFound = this.state?.image_url;
      if (!pic) {
        return notFound;
      }
      en = pic.en;
      de = pic.de;
      all = Object.values(pic);
      if (en) {
        return en;
      } else if (de) {
        return de;
      } else {
        return all[0];
      }
    };

    const pictures = this.state.product?.selected_images;
    const picIngreLarge = getPic(pictures?.ingredients?.display);
    const picIngreSmall = getPic(pictures?.ingredients?.small);
    const picNutriLarge = getPic(pictures?.nutrition?.display);
    const picNutriSmall = getPic(pictures?.nutrition?.small);
    // end of pictures section
    //

    //
    // ingredients section
    const Ingriedient = this.state.ingredients?.map((ingred) => {
      return (
        <div key={ingred.id}>
          <div>
            {Number(ingred.rank) > 0 && <div>Item Nr. {ingred.rank}</div>}
            {ingred.text > "" && (
              <div>
                {ingred.text.replace(/_/g, "")} <br />{" "}
                {ingred.id.replace(/en:/g, "").replace(/fr:/g, "")}
              </div>
            )}
            {ingred.vegan > "" && <div>Vegan: {ingred.vegan} </div>}
            {ingred.from_palm_oil > "" && (
              <div>from-palm-oil: {ingred.from_palm_oil} </div>
            )}
            {ingred.percent_estimate > 0 && (
              <div>
                percent estimate: {Number(ingred.percent_estimate).toFixed(3)}{" "}
              </div>
            )}
            {ingred.percent > 0 && (
              <div>percent: {Number(ingred.percent).toFixed(3)} </div>
            )}
            {ingred.has_sub_ingredients > "" && (
              <div>sub-ingredients: {ingred.has_sub_ingredients} </div>
            )}
            <div>
              <br />
            </div>
          </div>
        </div>
      );
    });
    // end of ingredients section
    //

    //
    // nutritions section
    const Nutritions = Object.entries(this.state.nutritions).map(
      ([key, val]) => (
        <div key={key}>
          {key}: {val}
        </div>
      )
    );
    // end of nutritions section
    //

    //
    // nutritions sectio
    let Score;
    if (this.state.score) {
      Score = Object.entries(this.state.score).map(([key, val]) => (
        <div key={key}>
          {key}: {val}
        </div>
      ));
    }
    // end of nutritions section
    //

    return (
      <div className="product-details-container">
        <h3 className="page-header">Product Details</h3>
        <div className="main-product-info details-box">
          <DetailsBasicCard
            code={this.state.product?.code}
            product={this.state.product}
            toggleFavorite={(product) => this.props.toggleFavorite(product)}
            isFavorite={(product) => this.props.isFavorite(product)}
          />
        </div>
        <div className="details-box">{CatTag}</div>
        <div className="secondary-product-info details-box">
          <NutrientLevels
            nutrientLevels={this.state.product?.nutrient_levels}
          />
          <Contains contains={this.state.product?.ingredients_analysis_tags} />
          <AllergensSection allergens={this.state.product?.allergens_tags} />
        </div>

        <div>
          {/* <ModalImage
            large={picFrontLarge}
            small={picFrontSmall}
            alt={this.state.product?.product_name}
          /> */}

          <div className="ToggleContainer">
            <div className="Ingredients">
              <IngredientsCard
                className={"Ingredients"}
                ingreTitle={"Ingredients"}
                ingreTag={this.state.product?.ingredients_text_debug}
                ingreContent={Ingriedient}
                large={picIngreLarge}
                small={picIngreSmall}
              />
            </div>
            <div>
              <NutritionsCard
                className={"Nutritions"}
                nutriTitle={"Nutritions"}
                nutriContent={Nutritions}
                large={picNutriLarge}
                small={picNutriSmall}
              />
            </div>
            <div>
              <ScoreCard
                className={"Ratings"}
                scoreTitle={"Score"}
                scoreContent={Score}
                scoreNovaTag={this.state.product?.nova_groups_tags}
                scoreNova={this.state.product?.nova_group}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
