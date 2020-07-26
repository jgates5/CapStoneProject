import React, { Component } from "react";
import ReactDOM from 'react-dom';

<script type="text/babel"></script>
export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username:"",
      password:"",
      newUsername:"",
      newPassword:"",
      showSignup:false,
      showLogin:true
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
    let checkValue = "LOGGED_IN";
    if(this.props.IsUserLoggedIn == checkValue){
      // return(<div className="loggedin">
      //   <p>You are logged in as {this.props.LoggedInUserName}</p>
      //   <button className="logout" onClick={this.LogoutButtonIsClicked} >Log out</button>
      //   </div>);
      return("");
    }
    else {
      return(
          <div className="container">
            <div className={"signup" + ((this.state.showSignup) ? "" : " grey")  }
              onClick={this.showSignupSection}
            >
              Sign Up
            </div>
            <div className={"login" + ((this.state.showLogin) ? "" : " grey")  }
              onClick={this.showLoginSection}
            >
              Log In
            </div>
            <div className={"signup-form" + ((this.state.showSignup) ? " test" : " hidden")}>
                <input
                type="username"
                name="newUsername"
                placeholder="Choose a Username"
                value={this.state.newUsername}
                onChange={this.handleChange}
              />

              <input
                type="password"
                name="newPassword"
                placeholder="Choose a Password"
                value={this.state.newPassword}
                onChange={this.handleChange}
              />
              <div className="button" onClick={(ev) => {this.CreateButtonIsClicked()}}>Create Account</div>
            </div>
            <div className={"login-form" + ((this.state.showLogin) ? " test" : " hidden") }>
                <h5>{this.props.errorMessage}</h5>
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
              <div className="button" onClick={(ev) => {this.LoginButtonIsClicked()}}>Login</div>
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

  showSignupSection = () => {
    this.setState({
      showLogin:false,
      showSignup:true
    });
  }

  showLoginSection = () => {
    this.setState({
      showLogin:true,
      showSignup:false
    });

  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      errorMessage: ""
    });
  }
}