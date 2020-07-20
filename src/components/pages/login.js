import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username:"",
      password:"",
      newUsername:"",
      newPassword:"",
    };
 
      this.handleSuccessfulUser = this.handleSuccessfulUser.bind(this);
      this.handleUnSuccessfulUser = this.handleUnSuccessfulUser.bind(this);
    }

    handleSuccessfulUser() {
    this.props.TestUserNamePassword();
    // gives access the site where did they navigate to
    this.props.history.push("/my-zumba");
    }

    handleUnSuccessfulUser() {
    this.props.handleUnSuccessfulLogin();
    }

  render(){
    if(this.props.IsUserLoggedIn == "LOGGED_IN"){
      return(<div>
        You are logged in as {this.props.LoggedInUserName}
        <button onClick={this.LogoutButtonIsClicked} >Log out</button>
        </div>);
    }
    else {
      return(
        <div>
          <div>
              Zumba
              Login
              <input
              type="username"
              name="username"
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
              <button onClick={(ev) => {this.LoginButtonIsClicked()}}>Login</button>
          </div>
          <div>
            Or
          </div>
          <div>
          Zumba
          Create New Account
          <input
          type="username"
          name="newUsername"
          placeholder="New username"
          value={this.state.newUsername}
          onChange={this.handleChange}
        />

        <input
          type="password"
          name="newPassword"
          placeholder="New password"
          value={this.state.newPassword}
          onChange={this.handleChange}
        />
          <button onClick={(ev) => {this.CreateButtonIsClicked()}}>Create User</button>
      </div>
      </div>
      );
    }
  }
  LoginButtonIsClicked = () => {
    this.props.TestUserNamePassword(this.state.username,this.state.password);
  }
  LogoutButtonIsClicked = () => {
    this.props.LogUserOut();
  }
  CreateButtonIsClicked = () => {
    this.props.CreateNewUser(this.state.newUsername,this.state.newPassword);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      errorMessage: ""
    });
  }
}