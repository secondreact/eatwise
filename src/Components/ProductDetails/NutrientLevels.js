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
        <div className={`nutrient-fact ${Fat}`}>{Fat}</div>
      </li>
      <li>
        <strong>Saturated Fat: </strong>
        <div className={`nutrient-fact ${SatFat}`}>{SatFat}</div>
      </li>
      <li>
        <strong>Sugars: </strong>
        <div className={`nutrient-fact ${Sugar}`}>{Sugar}</div>
      </li>
      <li>
        <strong>Salt: </strong>
        <div className={`nutrient-fact ${Salt}`}>{Salt}</div>
      </li>
    </div>
  );
}
