import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import ResultsPage from "./pages/ResultsPage";
import DetailsPage from "./pages/DetailsPage";
import AboutPage from "./pages/AboutPage";
import FavoritesPage from "./pages/FavoritesPage";
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
            <Route exact path="/favorites" component={FavoritesPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}
