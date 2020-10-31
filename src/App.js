import React, { Component } from "react";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import "./App.css";
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
