import React, { Component } from "react";
import Categories from './Components/CategoriesButtons/ExploreCategories'
import Footer from './Components/Footer/Footer'

function ExplorePage() {
  return (
    <div>
      <div>
        <h1>Explore Page</h1>
        <Categories/>
      </div>
      <Footer/>
    </div>
  );
}

export default ExplorePage;
