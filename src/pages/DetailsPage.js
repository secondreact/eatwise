import React, { Component } from "react";
import AllergensSection from "../Components/ProductDetails/AllergensSection";
import Contains from "../Components/ProductDetails/ContainsIngredients";
import NutrientLevels from "../Components/ProductDetails/NutrientLevels";
import "../Components/ProductDetails/Productdetails.css";
import { IngredientsContainer, IngredientsTable } from '../Components/Ingredients/IngredientsElements'
import ProductCard from "../Components/ProductResults/ProductCard";
import "../Components/ProductDetails/Productdetails.scss";
// you can use this test product code: https://world.openfoodfacts.org/api/v0/product/3017620422003


export default class DetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      nutriments: [],
      imgRoot: [],
      catTag: [],
      ingredients: [],
      ing: []
    }
  }


  getProductInformation(code) {
    fetch(`https://world.openfoodfacts.org/api/v0/product/${code}`)
      .then((data) => data.json())
      .then((response) => {
        this.setState({ product: response.product,
        catTag: response.product.categories_tags,
        ingredients: response.product.ingredients,
        ing: response.ingredients});
      });
  }

  componentDidMount() {
    let productCode = this.props.match.params.code;
    this.getProductInformation(productCode);
  }




  render() {
    const CatTag = this.state.catTag.toString().replace(/en:/g, ' ')
    const Ingriedient = this.state.ingredients.map((ingred) => {
      return (<IngredientsContainer>
                <IngredientsTable>
                    {Number(ingred.rank) > 0 &&
                    <div>Item Nr. {ingred.rank}</div>}

                    {ingred.text > '' && <div> 
                    {ingred.text.replace(/_/g, '')} <br/> {ingred.id.replace(/en:/g, '').replace(/fr:/g, '')}</div>}
                    
                    {ingred.vegan > '' &&
                    <div>Vegan: {ingred.vegan} </div>}

                    {ingred.from_palm_oil > '' && <div>from-palm-oil: {ingred.from_palm_oil} </div>}

                    {
                    ingred.percent_estimate > 0 && <div>percent estimate: {Number  (ingred.percent_estimate).toFixed(3)} </div>}

                    {ingred.percent > 0 && <div>percent: {Number(ingred.percent).toFixed  (3)} </div>}
                    
                    {ingred.has_sub_ingredients > '' && <div>sub-ingredients: {ingred.has_sub_ingredients} </div>}
                    
                  <div><br/></div>
                </IngredientsTable>
             </IngredientsContainer>)
    })
    return (
      <div>
        <div> ingeridients-added
          <div>categories_tags: {CatTag}</div>
          <h3>Details Page test</h3>
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
            <div><br/></div>
            <div>{this.state.product.ingredients_text_debug} </div>
            <div><br/></div>
          <div> {Ingriedient} </div>
          </div>
        </div>
      </div>
    );
  }
}
