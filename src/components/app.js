import React, { Component } from 'react'
import Home from "./pages/home";
import About from "./pages/about-me";
import MyZumba from "./pages/my-zumba";
import NavigationContainer from "./navigation/navigation-container"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
export default class App extends Component {

  render() {
    return (
      <div className="app"> 
        <Router>
        <NavigationContainer />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about-me" component={About} />
              <Route path="/my-zumba" component={MyZumba} />
            </Switch>
         
        </Router>

        <div className= "footer">
          <div className="inner_footer">
            <div className="logo_container">
                <h2>Follow Us</h2>
              <a href="https://www.instagram.com/lauragates2/">
                <img src="https://4.bp.blogspot.com/-An6np82QKTQ/V4ego8qnXzI/AAAAAAAABqE/kyM3AaEyvv0aKi3cQl9-nRRry4tVXjG9gCEw/s1600/The+New+Instagram+Logo+With+Transparent+Background+11.png" alt="my picture" />
              </a>
            </div>
         
            <div className="footer_text">
              <h1>COPY RIGHT BY BOTTEGA PROJECT</h1> 
            </div>
          </div>
        </div>
      </div>
    );
 }
}