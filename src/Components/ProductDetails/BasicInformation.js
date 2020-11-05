import React from 'react'
import AllergensSection from './AllergensSection';
import Contains from './Contains'
import './Productdetails.css'

export default function BasicInformation() {
  return (
    <div>
    <h3>!! -- The data below is just there as a placeholder it will be replaced with the product fetched data</h3>
      <div className="main-product-info">
        <div className="image-section">
          {/* <img className="product-images" alt="ritter"/> */}
        </div>
        <div className="main-data">
          <h2>Haribo Saft Goldbears</h2>
          <h3>Mondelez-international</h3>
        </div>
      </div>
      <div className="secondary-info">
        <div className="contains-data">
        <h5>This product contains</h5>
          <Contains/>
        </div>
        <div className="allergens-data">
          <h5>Allergens Information</h5>
          <AllergensSection/>
        </div>
        <div className="ingredients-data">
          <h5>Ingredients</h5>
          <p>sugar, palm oil, hazelnuts 13%, cocoa lean to 7.4%, skimmed milk powder 6,6%, whey powder, emulsifiers : lecithins [soy], vanillin</p>
        </div>
        <div className="categories-data">
          <h5>Categories</h5>
            <p> Spreads, Breakfasts, Sweet spreads, Hazelnut spreads, Chocolate spreads, Cocoa and hazelnuts spreads</p>
        </div>
        <div className="novascore">
          <h5>Nova Score</h5>
            <p>Image</p>
            <p>Score details</p>
        </div>
        <div className="nutrientlevels">
          <h5>Nutrient Levels for 100g</h5>
            <p>Nutrients List</p>
            <ul>
              <li>Fat</li>
              <li>Saturated Fat</li>
              <li>Sugars</li>
              <li>Salt</li>
            </ul>
        </div>
        <div className="nutrition-facts">
          <h5>Nutrition Facts</h5>
            <div>Nutrients Table</div>
        </div>
      </div>
    </div>
  )
}
