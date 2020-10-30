import React, { Component } from "react";
import './Categories.css'

export default class Categories extends Component {
  constructor(){
    super();
    this.state = {
      buttonIsActive: false,
    }
  }
  handleClick = () => {
    this.setState({buttonIsActive: !this.state.buttonIsActive})
  }

  render(){
    return (
      <div className="buttons-section">
        <button className={this.state.buttonIsActive ? 'button-selected' : "category-button"} onClick={this.handleClick} >Gluten free</button>
        <button className={this.state.buttonIsActive ? 'button-selected' : "category-button"} onClick={this.handleClick} >Lactose free</button>
        <button className={this.state.buttonIsActive ? 'button-selected' : "category-button"} onClick={this.handleClick} >Sugar free</button>
        <button className={this.state.buttonIsActive ? 'button-selected' : "category-button"} onClick={this.handleClick} >No Nuts</button>
        <button className={this.state.buttonIsActive ? 'button-selected' : "category-button"} onClick={this.handleClick} >No Peanuts</button>
        <button className={this.state.buttonIsActive ? 'button-selected' : "category-button"} onClick={this.handleClick} >No Eggs</button>
        <button className={this.state.buttonIsActive ? 'button-selected' : "category-button"} onClick={this.handleClick} >No Fish</button>
        <button className={this.state.buttonIsActive ? 'button-selected' : "category-button"} onClick={this.handleClick} >Low Fat</button>
        <button className={this.state.buttonIsActive ? 'button-selected' : "category-button"} onClick={this.handleClick} >Vegan</button>
      </div>
  );
  }
  
}


