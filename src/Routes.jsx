import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import ExplorePage from "./pages/ExplorePage";
import ResultsPage from "./pages/ResultsPage";
import DetailsPage from "./pages/DetailsPage";
import AboutPage from "./pages/AboutPage";
import NavBar from "./Components/NavBar/Navbar";

export default class Routes extends Component {
  render() {
    return (
      <div className="wrap">
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={ResultsPage} />
            <Route exact path="/details/:code" component={DetailsPage} />
            <Route exact path="/about" component={AboutPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}
