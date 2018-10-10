import React, { Component } from "react";
import { Route, BrowserRouter, Switch, NavLink } from "react-router-dom";
import Home from "./Home";
import History from "./History";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav className="navbar navbar-expand navbar-light bg-light container">
            <ul className="navbar-nav row">
              <li className="col-6">
                <NavLink exact to="/">
                  Accueil
                </NavLink>
              </li>
              <li className="col-6">
                <NavLink to="/notre-histoire" activeClassName="selected">
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/notre-histoire" component={History} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
