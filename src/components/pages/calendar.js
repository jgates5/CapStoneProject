import React, { Component } from "react";

export default class Calendar extends Component {

  
  
  render(){
    return (
      <div>
        {(this.props.IsUserLoggedIn == "LOGGED_IN") ?
        <div>{this.props.LoggedInUserName} <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FDenver&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;showDate=1&amp;showNav=1&amp;showTitle=0&amp;src=enVtYmF3aXRobGF1cmE4MTA5QGdtYWlsLmNvbQ&amp;color=%23039BE5" width="800" height="600" frameborder="0" scrolling="no"></iframe></div>
       
        :""
        }
     
      </div>
    );
  }
}