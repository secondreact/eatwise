import React from "react";
import {
  EggIcon,
  FishIcon,
  FatsIcon,
  GlutenIcon,
  LactoseIcon,
  NutsIcon,
  PeanutsIcon,
  SugarIcon,
  VeganIcon,
} from "../../pages/shared/icons";

export default function Contains(props) {
  let containsIngredientsList = props.contains;
  const containsMap = new Map();
  containsMap.set("en:palm-oil", <FatsIcon />);

  console.log(containsIngredientsList);
  return (
    <div>
      {containsIngredientsList?.map((ingredient) => {
        return <div>{containsMap.get(ingredient)}</div>;
      })}
    </div>
  );
}

// "en:palm-oil",
// "en:non-vegan",
// "en:vegetarian-status-unknown"
