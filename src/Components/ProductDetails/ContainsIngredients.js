import React from "react";
import {
  // EggIcon,
  // FishIcon,
  // Fats,
  // GlutenIcon,
  // LactoseIcon,
  // NutsIcon,
  // PeanutsIcon,
  // SugarIcon,
  PalmOilFree,
  NonVegan,
  VeganIcon,
  ContainsPalmOil,
} from "../../pages/shared/icons";

export default function Contains(props) {
  let containsIngredientsList = props.contains;
  const containsMap = new Map();
  containsMap
    .set("en:non-vegan", <NonVegan />)
    .set("en:vegan", <VeganIcon />)
    .set("en:palm-oil", <ContainsPalmOil />)
    .set("en:palm-oil-free", <PalmOilFree />);

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
                <span class="tooltiptext">{ingredient}</span>
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
