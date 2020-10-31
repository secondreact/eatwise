import React, { Component } from "react";
import ResultsContainer from "../components/ProductInformation/ResultsContainer";
import "../components/ProductInformation/Productinfo.css";
import ProductCard from '../components/ProductInformation/ProductCard'

export default class ResultsPage extends Component {
  constructor(){
    super();
    this.state = {
      query: '',
      products: []
    };

    this.queryChange = this.queryChange.bind(this);
  }

  
  loadProducts(){
    fetch('https://en-en.openfoodfacts.org/brand/ferrero/1.json')
    .then((data) => data.json())
    .then((response) =>{
      this.setState({products:response.products})
    })
  }

  componentDidMount(){
    this.loadProducts();
  }

  queryChange(event){
    this.setState({query: event.target.value});
  }

  render(){
    return (
      <div>
        <div>
          <h4>Results Page</h4>
            <input onChange={this.queryChange} className="search-bar" type="text" placeholder="Search"></input>
          <div className="results-list">
            {this.state.products.map((item)=>{
              return(           
                  <ProductCard product_name_en={item.product_name_es} brands_tags={item.brands} image={item.image_small_url}/>
              )
            })}
          </div>
          <ResultsContainer />
        </div>
      </div>
    );
  }
}
