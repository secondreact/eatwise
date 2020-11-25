import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import ResultsPage from "./pages/ResultsPage";
import DetailsPage from "./pages/DetailsPage";
import AboutPage from "./pages/AboutPage";
import FavoritesPage from "./pages/FavoritesPage";
import NavBar from "./Components/NavBar/Navbar";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      favorites: JSON.parse(localStorage.getItem("favorites")) || [],
    };
  }

  componentDidUpdate() {
    localStorage.setItem("favorites", JSON.stringify(this.state.favorites));
  }

  toggleFavorite(product) {
    if (this.isFavorite(product)) {
      this.removeFavorite(product);
    } else {
      this.addFavorite(product);
    }
  }

  isFavorite(product) {
    return this.state.favorites.some(
      (favProduct) => favProduct.code === product.code
    );
  }

  addFavorite(product) {
    this.setState({ favorites: [...this.state.favorites, product] });
  }

  removeFavorite(product) {
    this.setState({
      favorites: this.state.favorites.filter(
        (favProduct) => favProduct.code !== product.code
      ),
    });
  }

  render() {
    console.log(this.state.favorites);
    return (
      <div className="App">
        <div className="wrap">
          <Router>
            <NavBar />
            <Switch>
              <Route exact path="/">
                <ResultsPage
                  toggleFavorite={(product) => this.toggleFavorite(product)}
                  isFavorite={(product) => this.isFavorite(product)}
                />
              </Route>
              <Route
                exact
                path="/details/:code"
                component={(props) => (
                  <DetailsPage
                    {...props}
                    toggleFavorite={(product) => this.toggleFavorite(product)}
                    isFavorite={(product) => this.isFavorite(product)}
                  />
                )}
              />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/favorites">
                <FavoritesPage
                  favoriteProducts={this.state.favorites}
                  toggleFavorite={(product) => this.toggleFavorite(product)}
                  isFavorite={(product) => this.isFavorite(product)}
                />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}
