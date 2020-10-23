import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ExplorePage from "./Components/ExplorePage";
import ResultsPage from "./Components/ResultsPage";
import DetailsPage from "./Components/DetailsPage";
import "./index.css";

const MyRoute = () => (
  <Router>
    <div>
      <ul className="AllPages">
        <li>
          <Link to="/Explore">
            {ExplorePage}
            <p>Explore</p>
          </Link>
        </li>
        <li>
          <Link to="/Results">
            {ResultsPage}
            <p>Results</p>
          </Link>
        </li>
        <li>
          <Link to="/Details">
            {DetailsPage}
            <p>Details</p>
          </Link>
        </li>
      </ul>
      <hr />

      <Route exact path="/Explore" component={ExplorePage} />
      <Route path="/Results" component={ResultsPage} />
      <Route path="/Details" component={DetailsPage} />
    </div>
  </Router>
);

export default MyRoute;
