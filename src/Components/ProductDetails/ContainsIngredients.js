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
  const containsMap = new Map();
  containsMap
    .set("en:palm-oil", <FatsIcon />)
    .set("en:non-vegan", <NonVegan />);

  console.log(containsIngredientsList);
  return (
    <div className="contains-ingredients">
      <h4>Ingredients information:</h4>
      <div className="icons-section">
        {containsIngredientsList?.map((ingredient) => {
          return (
            <div className="detailpage-icon">{containsMap.get(ingredient)}</div>
          );
        })}
      </div>
    </div>
  );
}

// "en:palm-oil",
// "en:non-vegan",
