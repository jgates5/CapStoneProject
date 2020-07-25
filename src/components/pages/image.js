import React, { Component } from "react";
import Zumba from "../../../static/assets/img/zumbapic.jpg";
export default class ZumbaPicture extends Component {
  render(){
    return (
        <div className="responsive">
         
            <img className="container__image" 
            src={Zumba} alt="" />
        
            <h2>Intro</h2>
          <div className="p">
            <p>My name is Laura Gates, and I love Zumba!
              From the very first time I was a student myself,
              my life felt incomplete. After being a student for a year,
              my desire to become an instructor and share my love for Zumba
              with other students grew. My classes are a place to forget
              about your cares, worries and responsibilities for one
              hour, and to have fun while giving yourself the workout of your life!
              Sign up and choose the classes you want, and I promise it will be the best choice you ever make.</p> 
          </div>
        </div>
        
    );
  }
}