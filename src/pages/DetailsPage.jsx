import React, { Component } from "react";


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
          <h4>Details Page</h4>

          {this.state.product?.product_name}

        </div>
      </div>
    );
  }
}









// import BasicInformation from '../components/ProductDetails/BasicInformation'

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