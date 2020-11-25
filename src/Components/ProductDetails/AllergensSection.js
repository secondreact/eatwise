import React from "react";
import {
  Eggs,
  Fish,
  Gluten,
  Lactose,
  Nuts,
  Peanuts,
} from "../../pages/shared/icons";
import "../ProductDetails/Productdetails.scss";

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
    <div className="contains-ingredients">
      <h4>Allergens:</h4>
      <div className="icons-section">
        {allergensList?.some((i) => allergensMap.has(i)) ? (
          allergensList?.map((allergen, i) => {
            return (
              <div key={i} className="detailpage-icon">
                {allergensMap.get(allergen)}
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

//       <Sugar />
/* Sofi note:  have to fix the sugar icon */
