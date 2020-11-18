import React from "react";
import "./Productdetails.scss";

export default function NutrientLevels(props) {
  const Fat = props.nutrientLevels?.fat;
  const SatFat = props.nutrientLevels?.["saturated-fat"];
  const Sugar = props.nutrientLevels?.sugars;
  const Salt = props.nutrientLevels?.salt;

  return (
    <div className="nutrient-levels">
      <h4>Nutrient Facts</h4>
      <li>
        <strong>Fat: </strong>
        <div
          className={
            Fat === "high"
              ? "nutrient-fact high"
              : Fat === "medium"
              ? "nutrient-fact medium"
              : Fat === "low"
              ? "nutrient-fact low"
              : "nutrient-fact"
          }
        >
          {Fat}
        </div>
      </li>
      <li>
        <strong>Saturated Fat: </strong>
        <div
          className={
            SatFat === "high"
              ? "nutrient-fact high"
              : SatFat === "medium"
              ? "nutrient-fact medium"
              : SatFat === "low"
              ? "nutrient-fact low"
              : "nutrient-fact"
          }
        >
          {SatFat}
        </div>
      </li>
      <li>
        <strong>Sugars: </strong>
        <div
          className={
            Sugar === "high"
              ? "nutrient-fact high"
              : Sugar === "medium"
              ? "nutrient-fact medium"
              : Sugar === "low"
              ? "nutrient-fact low"
              : "nutrient-fact"
          }
        >
          {Sugar}
        </div>
      </li>
      <li>
        <strong>Salt: </strong>
        <div
          className={
            Salt === "high"
              ? "nutrient-fact high"
              : Salt === "medium"
              ? "nutrient-fact medium"
              : Salt === "low"
              ? "nutrient-fact low"
              : "nutrient-fact"
          }
        >
          {Salt}
        </div>
      </li>
    </div>
  );
}
