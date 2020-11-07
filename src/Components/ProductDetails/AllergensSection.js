import React from "react";
import {
  Eggs,
  Fats,
  Fish,
  Gluten,
  Lactose,
  Nuts,
  Peanuts,
  Sugar,
  Vegan,
} from "../../pages/shared/icons";

export default function AllergensSection(props) {
  let allergensList = props.allergens;
  return (
    <div>
      {allergensList?.map((ingredient) => {
        return <li>{ingredient}</li>;
      })}
      <h4>allergens icons</h4>
      <Eggs />
      <Fats />
      <Fish />
      <Gluten />
      <Lactose />
      <Nuts />
      <Peanuts />
      {/* <Sugar/> */}
      {/* Sofi note: I have to fix the sugar icon */}
      <Vegan />
    </div>
  );
}
