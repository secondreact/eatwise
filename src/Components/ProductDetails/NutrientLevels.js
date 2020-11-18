import React from "react";
import "./Productdetails.scss";

export default function NutrientLevels(props) {
  console.log("nutrientfacts list:" + props.nutrientLevels);
  return (
    <div className="nutrient-levels">
      <h4>Nutrient Facts</h4>
      <li>
        <strong>Fat: </strong>
        <div className="nutrient-fact fat">{props.nutrientLevels?.fat}</div>
      </li>
      <li>
        <strong>Saturated Fat: </strong>
        <div className="nutrient-fact saturated-fat">
          {props.nutrientLevels?.["saturated-fat"]}
        </div>
      </li>
      <li>
        <strong>Sugars: </strong>
        <div className="nutrient-fact sugars">
          {props.nutrientLevels?.sugars}
        </div>
      </li>
      <li>
        <strong>Salt: </strong>
        <div className="nutrient-fact salt">{props.nutrientLevels?.salt}</div>
      </li>
    </div>
  );
}
