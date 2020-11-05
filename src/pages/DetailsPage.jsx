import React, { Component } from "react";
import BasicInformation from '../Components/ProductDetails/BasicInformation'

export default class DetailsPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      product: {}
    };
  }
  
  getProductInformation(code){
    fetch(`https://world.openfoodfacts.org/api/v0/product/${code}`)
    .then((data) => data.json())
    .then((response) =>{
      this.setState({product: response.product})
    });
  }

  componentDidMount(){
    let productCode = this.props.match.params.code;
    this.getProductInformation(productCode);
  }

  render(){
    return (
      <div>
        <div>
          <h4>Details Page test</h4>
          <img className="details-image" src={this.state.product?.image_front_url} alt={`${this.state.product?.product_name}`}/>
          <h2>{this.state.product?.product_name}</h2>
          <h3>{this.state.product?.brands}</h3>
          <BasicInformation/>
        </div>
      </div>
    );
  }
}











// function DetailsPage() {
//   return (
//     <div>
//       <div>
//         <h1>Details Page</h1>
//         <BasicInformation/>
//       </div>
//     </div>
//   );
// }

// export default DetailsPage;