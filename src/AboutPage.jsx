import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from './Components/Footer/Footer'

function AboutPage() {
  return (
    <div>
      <div>
        <h2>About EatWise</h2>
        <h4>Our Values</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor neque labore, laboriosam qui similique sapiente iste quae ullam unde aliquid quidem? Minima laudantium culpa laboriosam unde consequuntur fugit dicta voluptatum.
        </p>
        <h4>Help grow our platform</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor neque labore, laboriosam qui similique sapiente iste quae ullam unde aliquid quidem? Minima laudantium culpa laboriosam unde consequuntur fugit dicta voluptatum.
        </p>
        <h6> --- Testing footer component --- </h6>
        <Footer/>
      </div>
    </div>
  );
}

export default AboutPage;
