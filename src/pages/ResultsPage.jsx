import React, { Component } from "react";
import Categories from '../Components/CategoriesButtons/CategoriesButtons'
import "../Components/ProductResults/Productinfo.css";
import ProductCard from '../Components/ProductResults/ProductCard'
import Footer from "../Components/Footer/Footer";

export default class ResultsPage extends React.Component {
  constructor(){
    super();
    this.state = {
      query: '',
      products: []
    };

   this.queryChange = this.queryChange.bind(this);
   this.searchProducts = this.searchProducts.bind(this);
  }
  
  loadProducts(brand){
    fetch(`https://en-en.openfoodfacts.org/brand/${brand}/1.json`)
    .then((data) => data.json())
    .then((response) =>{
      this.setState({products:response.products})
    })
  }

  componentDidMount(){
    // this.loadProducts(this.state.query);
  }

  queryChange(event){
    this.setState({query: event.target.value});
  }

  searchProducts(){
    this.loadProducts(this.state.query);
  }

  
  render(){
    return (
      <div>
        <div>
          <h5>Results Page</h5>
            <input className="search-bar" onChange={this.queryChange} type="text" placeholder="Find products"></input>
            <button className="search-button" onClick={this.searchProducts}>Search</button>
            <Categories/>
            {/* <div>filter goes here</div> */}
          <div className="results-list">
            {this.state.products.map((item)=>{
              return(           
                  <ProductCard productName={item.product_name} brand={item.brands} image={item.image_small_url} code={item.code}/>
                  
              )
            })}
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}



// store data from API in the state
// has to be converted to a class component
// data needs to be stored in the state, pass the props to categories

