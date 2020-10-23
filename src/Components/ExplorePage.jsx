import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar/Navbar";

function ExplorePage() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default ExplorePage;
