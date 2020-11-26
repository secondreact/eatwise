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
  let containsLabelsList = props.contains?.map((label) => label.slice(3));
  const containsMap = new Map();
  containsMap
    .set("non-vegan", <NonVegan />)
    .set("vegan", <VeganIcon />)
    .set("palm-oil", <ContainsPalmOil />)
    .set("palm-oil-free", <PalmOilFree />);

  // "en:vegetarian"

  return (
    <div className="contains-ingredients">
      <h4>Ingredients information:</h4>
      <div className="icons-section">
        {containsLabelsList?.some((i) => containsMap.has(i)) ? (
          containsLabelsList?.map((label, i) => {
            return (
              <div key={i} className="detailpage-icon">
                {containsMap.get(label)}
                <span class="icon-description">{label}</span>
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
