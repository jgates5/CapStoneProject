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
              <img className="container__images" 
                    src={Home} alt="" />
              <img className="container__images" 
                    src={DanceImg} alt="" />
              <img className="container__images" 
                    src={Beat} alt="" />
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

 



  
