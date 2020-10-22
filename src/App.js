import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import MyRoute from "./Routs";

function App() {
  return (
    <div className="App">
      <MyRoute />
    </div>
  );
}

export default App;
