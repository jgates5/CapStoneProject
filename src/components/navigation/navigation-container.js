import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavigationContainer extends Component {
    constructor() {
      super();
    }
    render() {
        return (
            <div>
                <NavLink exact to="/">
                Home
                </NavLink>
                <NavLink to="/about-me" activeClassName="nav-link-active">About Me</NavLink>
                <NavLink to="/my-book" activeClassName="nav-link-active">My Book</NavLink>
                <NavLink to="/my-zumba" activeClassName="nav-link-active">My Zumba</NavLink>
                <NavLink to="/follow-me" activeClassName="nav-link-active">Follow Me</NavLink>
            </div>
        );
    }
}