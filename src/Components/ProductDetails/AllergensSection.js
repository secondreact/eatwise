import React from "react";
import {
  Eggs,
  Fish,
  Gluten,
  Lactose,
  Nuts,
  Peanuts,
} from "../../pages/shared/icons";
import "../ProductDetails/Productdetails.css";

export default function AllergensSection(props) {
  let allergensList = props.allergens;

  const allergensMap = new Map();
  allergensMap
    .set("en:eggs", <Eggs />)
    .set("en:nuts", <Nuts />)
    .set("en:milk", <Lactose />)
    .set("en:gluten", <Gluten />)
    .set("en:peanuts", <Peanuts />)
    .set("en:fish", <Fish />);

  return (
    <div className="allergens-section">
      {allergensList?.map((allergen) => {
        return (
          <div className="allergen-icon">{allergensMap.get(allergen)}</div>
        );
      })}
    </div>
  );
}

//       <Sugar />
/* Sofi note: I have to fix the sugar icon */
