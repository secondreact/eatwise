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
        <p>Fat:</p>
        {Fat ? (
          <div className={`nutrient-fact ${Fat}`}>{Fat}</div>
        ) : (
          <div className="nutrient-fact">No data</div>
        )}
      </li>
      <li>
        <p>Saturated Fat: </p>
        {SatFat ? (
          <div className={`nutrient-fact ${SatFat}`}>{SatFat}</div>
        ) : (
          <div className="nutrient-fact">No data</div>
        )}
      </li>
      <li>
        <p>Sugars: </p>
        {Sugar ? (
          <div className={`nutrient-fact ${Sugar}`}>{Sugar}</div>
        ) : (
          <div className="nutrient-fact">No data</div>
        )}
      </li>
      <li>
        <p>Salt: </p>
        {Salt ? (
          <div className={`nutrient-fact ${Salt}`}>{Salt}</div>
        ) : (
          <div className="nutrient-fact">No data</div>
        )}
      </li>
    </div>
  );
}
