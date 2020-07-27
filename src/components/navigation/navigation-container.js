import React, { Component } from "react";
import { Link } from "react-router-dom";





export default class NavigationContainer extends Component {


  state = {
    toggle: true
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
        <div className="header">
          
            <div style={{width:"100%"}}>
              <div style={{float:"left"}} className="menu" onClick={this.menuToggleOpen}>Menu</div>
              <div style={{float:"right"}} className="close" onClick={this.menuToggleClose}>X</div>
            </div>
            <ul className={toggle ? "toggle" : ""}>
              <li><Link onClick={(_x) => {this.setState({toggle:true})}} to="/">Home</Link></li>
              
              <li><Link onClick={(_x) => {this.setState({toggle:true})}} to="/signup-form">SIGNUP</Link></li>
              {(this.props.isUserLoggedIn == "LOGGED_IN") ?
                <li className={"headerLogoutMenuItem fakeHeaderLink"} onClick={(_x) => {this.props.logOutClicked()}}>Logout</li>
              :""
              }
            </ul>
          {(this.props.isUserLoggedIn == "LOGGED_IN") ?
          <div className={"headerLogoutButton fakeHeaderLink"} onClick={(_x) => {this.props.logOutClicked()}}>Logout</div> 
          :""}
        </div>
        )
  }
}


