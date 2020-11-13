import React from "react";

export default function NutrientLevels(props) {
  console.log("nutrientfacts list:" + props.nutrientLevels);
  return (
    <div className="nutrient-levels">
      <h4>Nutrient Facts</h4>
      <li>
        <strong>Fat: </strong> {props.nutrientLevels?.fat}
      </li>
      <li>
        <strong>Saturated Fat: </strong>
        {props.nutrientLevels?.["saturated-fat"]}
      </li>
      <li>
        <strong>Sugars: </strong>
        {props.nutrientLevels?.sugars}
      </li>
      <li>
        <strong>Salt: </strong>
        {props.nutrientLevels?.salt}
      </li>
    </div>
  );
}
