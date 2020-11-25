import React from "react";
import {
  // EggIcon,
  // FishIcon,
  FatsIcon,
  // GlutenIcon,
  // LactoseIcon,
  // NutsIcon,
  // PeanutsIcon,
  // SugarIcon,
  // VeganIcon,
  NonVegan,
} from "../../pages/shared/icons";

export default function Contains(props) {
  let containsIngredientsList = props.contains;
  // debugger;
  const containsMap = new Map();
  containsMap
    .set("en:palm-oil", <FatsIcon />)
    .set("en:non-vegan", <NonVegan />);
  //     "en:palm-oil-free",
  // "en:vegan",
  // "en:vegetarian"

  return (
    <div className="contains-ingredients">
      <h4>Ingredients information:</h4>
      <div className="icons-section">
        {containsIngredientsList?.some((i) => containsMap.has(i)) ? (
          containsIngredientsList?.map((ingredient, i) => {
            return (
              <div key={i} className="detailpage-icon">
                {containsMap.get(ingredient)}
              </div>
            );
          })
        ) : (
          <div className="nutrient-fact">No data</div>
        )}
      </div>
    </div>
  );
}
