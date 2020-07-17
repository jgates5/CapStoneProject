import React, { Component } from "react";
import Zumba from "../../../static/assets/img/zumbapic.jpg";
export default class ZumbaPicture extends Component {
  render(){
    return (
      <div>
        <div className="container">
          <img className="container__image" 
            src={Zumba} alt="" />

          
          <div className="container__text">
          <div className="text">
            <h1>Intro</h1>
          </div>
            <p className="intro">Well, that's the trick, isn't it? And it's going to cost you something extra. Ten thousand in advance. Ten thousand? We could almost buy our own ship for that! But who's going to fly it, kid! You?</p> 
            <p>You bet I could. I'm not such a bad pilot myself! We don't have to sit here and listen... We haven't that much with us. But we could pay you two thousand now, plus fifteen when we reach Alderaan. Seventeen, huh! Okay. You guys got yourself a ship. We'll leave as soon as you're ready. Docking bay Ninety-four. Ninety-four. Looks like somebody's beginning to take an interest in your handiwork. All right, we'll check it out.</p>  
          </div>
        </div>
        
      </div>
    );
  }
}