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
            <h1>Virtual Classes</h1>
            <form>
            <button className="sign-up-button" formaction="/my-zumba">Sign Up!</button>
            </form>
        </div>
      </div>
        <h2>Workout while you dance to the beat!</h2>
      <table className="grid">
        <tr>
           <td><img className="container__images" 
                    src={Home} alt=""  width="30" />
            </td>
           <td>Dance in the comfort of your own home.</td>
        </tr>
        <tr>
          <td><img className="container__images" 
                    src={DanceImg} alt="" width="30" /></td>
          <td>Dance with an instructor who will motivate your drive to get fit.</td>
        </tr>
        <tr>
          <td><img className="container__images" 
                    src={Beat} alt="" width="30" /></td>
          <td>Get the feeling of being in a club without going to a club.</td>
        </tr>    
      </table>
        
    
    </div>            
   )
};

 



  
