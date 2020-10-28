import React, {Component} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import ExplorePage from "./ExplorePage";
import ResultsPage from "./ResultsPage";
import DetailsPage from "./DetailsPage";
import AboutPage from "./AboutPage";
import NavBar from "./Components/NavBar/Navbar";


export default class MyRoute extends Component {
// ...Here goes the API call, constuctor, super, state + componentDidM
// set state with result of the api

  render() {
    // console.log (state) ... pass contents as props to the children
    return (
      <Router>
      <NavBar />
      <Switch>
        <Route exact path="/explore" component={ExplorePage} />
        <Route exact path="/results" component={ResultsPage} />
        <Route exact path="/details" component={DetailsPage} />
        <Route exact path="/about" component={AboutPage} />
      </Switch>
    </Router>
    )
  }
}
