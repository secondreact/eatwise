import React from "react";
import {
  // EggIcon,
  // FishIcon,
  Fats,
  // GlutenIcon,
  // LactoseIcon,
  // NutsIcon,
  // PeanutsIcon,
  // SugarIcon,
  // VeganIcon,
  NonVegan,
  VeganIcon,
} from "../../pages/shared/icons";

export default function Contains(props) {
  let containsIngredientsList = props.contains;
  const containsMap = new Map();
  containsMap
    .set("en:palm-oil", <Fats />)
    .set("en:non-vegan", <NonVegan />)
    .set("en:vegan", <VeganIcon />);
  //     "en:palm-oil-free",
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
