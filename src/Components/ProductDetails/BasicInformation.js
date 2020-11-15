import React from "react";
import "./Productdetails.css";

export default function BasicInformation() {
  return (
    <div>
        <div className="ingredients-data">
          <h5>Ingredients</h5>
          <p>
            sugar, palm oil, hazelnuts 13%, cocoa lean to 7.4%, skimmed milk
            powder 6,6%, whey powder, emulsifiers : lecithins [soy], vanillin
          </p>
        </div>
        <div className="categories-data">
          <h5>Categories</h5>
          <p>
            {" "}
            Spreads, Breakfasts, Sweet spreads, Hazelnut spreads, Chocolate
            spreads, Cocoa and hazelnuts spreads
          </p>
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
  );
}
