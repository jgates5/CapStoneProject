import React, { Component } from 'react'
import Login from "./login";
export default class LoginUser extends Component {
 constructor(props) {
     super(props)

     this.handleSuccessfulUser = this.handleSuccessfulUser.bind(this);
     this.handleUnSuccessfulUser = this.handleUnSuccessfulUser.bind(this);
  }

  handleSuccessfulUser() {
    this.props.handleSuccessfulLogin();
    // gives access the site where did they navigate to
    this.props.history.push("/my-zumba");
  }

  handleUnSuccessfulUser() {
    this.props.handleUnSuccessfulLogin();
  }

  render() {
  return (
      <div className="form-wrapper">
        <Login 
        handleSuccessfulUser={this.handleSuccessfulUser}
        handleUnsuccessfulUser={this.handleUnSuccessfulUser}
        />
      </div>
    )
  }
}