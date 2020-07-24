import React from 'react'

 import ReactDOM from 'react-dom'
// import Vimeo from '@u-wave/react-vimeo'
import Home from "../../../static/assets/img/home.png";
import DanceImg from "../../../static/assets/img/zumbadance.png";
import Beat from "../../../static/assets/img/dj.jpg";

 export default function () {
   return (
    <div>
      <div className="video-container">
        <iframe src="https://player.vimeo.com/video/438726640?autoplay=1&loop=1" 
        width="600" height="300" 
        frameborder="0" allow="autoplay; fullscreen" allowfullscreen>
        </iframe>
        <div className="video-text">
            <h1>VIRTUAL CLASSES</h1>
            <form>
            <button formaction="/my-zumba">Sign Up!</button>
            </form>
        </div>
      </div>
        <h2>Workout while you dance to the beat!</h2>
      <div className="row">
          <div className="column">
            <div className="images">
              <img className="container__images" 
                    src={Home} alt="" />
              <img className="container__images" 
                    src={DanceImg} alt="" />
              <img className="container__images" 
                    src={Beat} alt="" />
            </div>
          </div>
        
       
          <div className="column">
            <p>Dance in the comfort of your own home.</p>
            <p>Dance with an instructor who will motivate your drive to get fit. </p>
            <p>Get the feeling of being in a club without going to a club.</p>      
          </div>
      </div>
        
    
    </div>            
   )
};

 



  
// <!DOCTYPE html>
// <html>
// <head>
// 	<title>Video Background</title>
// 	<link rel="stylesheet" type="text/css" href="style.css">
// </head>
// <body>
//      <video autoplay muted loop class="my-video">
//      	<source src="Nature-full-HD.mp4" type="video/mp4">
//      </video>

//      <div class="text-holder">
//      	<h1>Welcome To My Website</h1>
//      	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
//     tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
//     quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
//     consequat.</p>
//        <button class="btn">Sign Up</button>
//      </div>
// </body>
// </html>