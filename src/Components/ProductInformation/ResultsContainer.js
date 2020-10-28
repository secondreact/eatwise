import React from 'react'
import ProductCard from './ProductCard'
import "./Productinfo.css";

export default function ResultsContainer() {
  return (
    <div>
      <div className="results-list">
        <ProductCard product_name_en="Nutella" brands_tags="Ferrero" image="https://tinyurl.com/nutella600"/>
        <ProductCard product_name_en="Haribo Saft Goldbears" brands_tags="Haribo" image="https://tinyurl.com/y6clffzh"/>
        <ProductCard product_name_en="Arrabbiata - Barilla " brands_tags="Barilla" image="https://tinyurl.com/y2k8tuey"/>
        <ProductCard product_name_en="Spekulatius - Ritter Sport" brands_tags="Ritter Sport" image="https://tinyurl.com/y323okpr"/>
      </div>
    </div>
  )
}
