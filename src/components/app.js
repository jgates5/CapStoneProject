import React, { Component } from 'react'
import Home from "./pages/home";

import MyZumba from "./pages/my-zumba";
import NavigationContainer from "./navigation/navigation-container"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Cookies from "js-cookie";


export default class App extends Component {
  constructor(props) {
    super(props);

    let cookieName = Cookies.get("userName");
    if(cookieName){
      this.state = {
        loggedInStatus : "LOGGED_IN",
        loggedInUserName : cookieName
      }
    } else {
      this.state = {
        loggedInStatus: "NOT_LOGGED_IN",
        loggedInUserName: "",
      };
  }
  }


  

    render() {
      return (
        <div className="app"> 
          <Router>
          <NavigationContainer />
          <div style={{minHeight:"700px"}}>
              <h2>{this.state.loggedInStatus}</h2>
            <Switch>
              <Route exact path="/" component={Home} />
              {/* <Route path="/" */}
              {/* // render={props => ( */}
              {/* //   <Login{...props}
              //   handleSuccessfulLogin={this.handleSuccessfulLogin}
              //   handleUnSuccessfulLogin={this.handleUnSuccessfulLogin}
              //   />
              // )}
              /> */}
             
              <Route path="/my-zumba">
                <MyZumba
                  errorMessage={this.state.errorMessage}
                  TestUserNamePassword={this.AttemptAuthenticate}
                  LogUserOut={this.LogOut}
                  CreateNewUser={this.CreateNewUser}
                  IsUserLoggedIn={this.state.loggedInStatus}
                  LoggedInUserName={this.state.loggedInUserName}
                />
              </Route>
            </Switch>
        
            </div>
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

    //****************Handle Login */
    CreateNewUser = (userName,password) => {
      //TODO: Do some error checking to make sure stuff is not blank
        fetch("http://127.0.0.1:5000/user/create", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                username: userName,
                password: password
            })
        })
        .then(response => {return response.json();})
        .then(response => {
          if (response === 'Successful') {
            // console.log("You can come in");
            this.handleSuccessfulLogin(userName);
            //TODO: Tell the user it was successful
          } else {

            //TODO: Tell the user why it failed
            this.setState({
              errorMessage: "Username or Password taken"
            });
            this.handleFailedLogin();
          }
        })
  
        .catch(error => {
          // console.log(error)
          this.setState({
            errorMessage: "An error occured"
            
          });
            this.handleUnSuccessfulUser();
        });
   
      event.preventDefault();
        
    }

    AttemptAuthenticate = (userName,password) => {
      fetch("http://127.0.0.1:5000/user/verification", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                username: userName,
                password: password
            })
        })
        .then(response => {
          return response.json();
        })
        .then(response => {
          if (response === 'User Verified') {
            // console.log("You can come in");
            this.handleSuccessfulLogin(userName);
            //TODO: tell user it was successful
            //TODO: Set authentication cookie
          } else {
            // console.log(response);
            this.setState({
              errorMessage: "Username or Password incorrect"
            });
            this.handleFailedLogin();
          }
        })
        .catch(error => {
          // console.log(error)
          this.setState({
            errorMessage: "An error occured" 
          });
            this.handleFailedLogin();
        });
    }

    LogOut = () => {
      Cookies.set('userName',"");
      this.setState({
        loggedInStatus: "NOT_LOGGED_IN"
      });
    }

    handleSuccessfulLogin = (userName) => {
      Cookies.set('userName',userName);
      this.setState({
        loggedInStatus: "LOGGED_IN",
        loggedInUserName: userName
      });
    }

    handleFailedLogin = () => {
      Cookies.set('userName',"");
      this.setState({
        loggedInStatus: "NOT_LOGGED_IN"
      });
    }

    //****************End Handle Login */

}