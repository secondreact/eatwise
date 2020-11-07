import React from "react";

export default function NutrientLevels(props) {
  let nutrientFacts = props.nutrientLevels;
  return (
    <div>
      {nutrientFacts.keys(nutrientFacts)?.map((key) => {
        return <li key={key}>{nutrientFacts[key]}</li>;
      })}
    </div>
  );
}
