import React, { Component } from 'react';
import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import About from "./pages/about-me";
import MyBook from "./pages/my-book";
import MyZumba from "./pages/my-zumba";
import FollowMe from "./pages/follow-me";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <NavigationContainer />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about-me" component={About} />
              <Route path="/my-book" component={MyBook} />
              <Route path="/my-zumba" component={MyZumba} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

