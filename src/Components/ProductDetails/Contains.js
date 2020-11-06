import React from "react";
import {
  EggIcon,
  FishIcon,
  FatsIcon,
  GlutenIcon,
  LactoseIcon,
  NutsIcon,
  PeanutsIcon,
  SugarIcon,
  VeganIcon,
} from "../../pages/shared/icons";

export default function Contains(props) {
  console.log(props.contains);
  let containsArray = props.contains;
  return (
    <div>
      {containsArray?.map((ingredient) => {
        return <li>{ingredient}</li>;
      })}
      <h4>icons</h4>
      <EggIcon />
      <FatsIcon />
      <FishIcon />
      <GlutenIcon />
      <LactoseIcon />
      <NutsIcon />
      <PeanutsIcon />
      <SugarIcon />
      <VeganIcon />
    </div>
  );
}
