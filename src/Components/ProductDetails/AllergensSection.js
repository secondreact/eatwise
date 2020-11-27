import React from "react";
import {
  Eggs,
  Fish,
  Gluten,
  Lactose,
  Nuts,
  Peanuts,
  Soybeans,
  Mustard,
} from "../../pages/shared/icons";
import "../ProductDetails/Productdetails.scss";

export default function AllergensSection(props) {
  let allergensList = props.allergens?.map((allergen) => allergen.slice(3));
  const allergensMap = new Map();
  allergensMap
    .set("eggs", <Eggs />)
    .set("nuts", <Nuts />)
    .set("milk", <Lactose />)
    .set("gluten", <Gluten />)
    .set("peanuts", <Peanuts />)
    .set("fish", <Fish />)
    .set("soybeans", <Soybeans />)
    .set("mustard", <Mustard />);

  return (
    <div className="contains-ingredients">
      <h4>Allergens:</h4>
      <div className="icons-section">
        {allergensList?.some((i) => allergensMap.has(i)) ? (
          allergensList?.map((allergen, i) => {
            return (
              <div key={i} className="detailpage-icon">
                {allergensMap.get(allergen)}
                <span className="icon-description">{allergen}</span>
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
