import React, {Component} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import ExplorePage from "./pages/ExplorePage";
import ResultsPage from "./pages/ResultsPage";
import DetailsPage from "./pages/DetailsPage";
import AboutPage from "./pages/AboutPage";
import NavBar from "./components/NavBar/Navbar";


export default class Routes extends Component {
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
        <Route exact path="/details/:code" component={DetailsPage} />
        <Route exact path="/about" component={AboutPage} />
      </Switch>
    </Router>
    )
  }
}
