import React, { Component } from "react";
import { FaIcons } from "react-icons/fa";
import Categories from '../components/CategoriesButtons/CategoriesButtons'
import Footer from '../components/Footer/Footer'
import '../index.css'

function ExplorePage() {
  return (
    <div>
      <div>
        <h1>Explore Page</h1>
        <input className="search-bar" type="text" placeholder="Search"></input>
        <Categories/>
      </div>
      <Footer/>
    </div>
  );
}

export default ExplorePage;


// store data from API in the state
// has to be converted to a class component
// data needs to be stored in the state, pass the props to categories

