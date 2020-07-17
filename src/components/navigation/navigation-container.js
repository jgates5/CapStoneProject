import React, { Component } from "react";
import { Link } from "react-router-dom";





export default class NavigationContainer extends Component {


  state = {
    toggle: false
  };

  menuToggleOpen = () => {
      this.setState({toggle: false});
  }
  menuToggleClose = () => {
    this.setState({toggle: true});
}

  render() {
    const {toggle} = this.state
    return (
        <div>
          <header>
            <div style={{width:"100%"}}>
              <div style={{float:"left"}} className="menu" onClick={this.menuToggleOpen}>Menu</div>
              <div style={{float:"right"}} className="close" onClick={this.menuToggleClose}>X</div>
            </div>
            <ul className={toggle ? "toggle" : ""}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about-me" >About</Link></li>
              <li><Link to="/my-zumba">Zumba</Link></li>
            </ul>
          </header>
          
        </div>
        )
  }
}


