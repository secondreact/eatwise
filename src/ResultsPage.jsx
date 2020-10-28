import React, { Component } from "react";
import ProductCard from "./Components/ProductInformation/ProductCard";
import "./Components/ProductInformation/Productinfo.css"

function ResultsPage() {
  return (
    <div>
      <div>
        <h1>Results Page</h1>
          <div className="results-list">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
      </div>
    </div>
  );
}

export default ResultsPage;
