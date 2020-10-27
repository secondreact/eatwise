import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import ExplorePage from "./ExplorePage";
import ResultsPage from "./ResultsPage";
import DetailsPage from "./DetailsPage";
import AboutPage from "./AboutPage";
import NavBar from "./Components/NavBar/Navbar";

const MyRoute = () => (
  <div>
    <Router>
      <NavBar />
      <Switch>
        <Route path="/explore" exact component={ExplorePage} />
        <Route path="/results" component={ResultsPage} />
        <Route path="/details" component={DetailsPage} />
        <Route path="/about" component={AboutPage} />
      </Switch>
    </Router>
  </div>
);

export default MyRoute;
