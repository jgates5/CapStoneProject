import React, { Component } from 'react';
import Login from './login';
import Calendar from './calendar';

export default class MyZubma extends Component {
  
  render(){
    return(
      <div>
        <Login 
          errorMessage={this.props.errorMessage}
          TestUserNamePassword={this.props.TestUserNamePassword}
          LogUserOut={this.props.LogUserOut}
          CreateNewUser={this.props.CreateNewUser}
          IsUserLoggedIn={this.props.IsUserLoggedIn}
          LoggedInUserName={this.props.LoggedInUserName}
        />

       <Calendar
        IsUserLoggedIn={this.props.IsUserLoggedIn}
        LoggedInUserName={this.props.LoggedInUserName}
       />
       {/*
        {(this.props.IsUserLoggedIn == "LOGGED_IN") ?
        <div>{this.props.LoggedInUserName}'s Calendar Goes Here</div>
        :""
        }
      */}
      </div>
    )
  }
}