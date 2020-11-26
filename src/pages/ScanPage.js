import React, { Component } from "react";
import BarCodeReader from "../Components/BarCodeReader/BarCodeReader";

export default class ScanPage extends Component {
  render() {
    return (
      <div>
        <BarCodeReader />
      </div>
    );
  }
}
