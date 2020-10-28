import React, { Component } from "react";
import './Categories.css'

function Categories() {
  return (
      <div className="buttons-section">
        <button className="category-button" >Gluten free</button>
        <button className="category-button" >Lactose free</button>
        <button className="category-button" >Peanuts free</button>
        <button className="category-button" >Nuts free</button>
        <button className="category-button" >No Eggs</button>
        <button className="category-button" >No Fish</button>
        <button className="category-button" >Low Fat</button>
        <button className="category-button" >Sugar free</button>
        <button className="category-button" >Vegan</button>
      </div>
  );
}

export default Categories;
