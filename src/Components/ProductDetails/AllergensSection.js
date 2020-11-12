import React from "react";
// import {
//   Eggs,
//   Fats,
//   Fish,
//   Gluten,
//   Lactose,
//   Nuts,
//   Peanuts,
//   Sugar,
//   Vegan,
// } from "../../pages/shared/icons";
import { allergensIcons } from "../../pages/shared/AllergensContainsData";

export default function AllergensSection(props) {
  let allergensList = props.allergens;
  console.log("allergensList: " + allergensList);
  return (
    <div>
      {allergensList?.map((ingredient) => (
        <p>{allergensIcons[ingredient]}</p>
      ))}
    </div>
  );
}

// <h4>allergens icons</h4>
//       <Eggs />
//       <Fats />
//       <Fish />
//       <Gluten />
//       <Lactose />
//       <Nuts />
//       <Peanuts />
//       <Sugar />
/* Sofi note: I have to fix the sugar icon */
/* <Vegan /> */
