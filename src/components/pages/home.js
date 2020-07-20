import React from "react";
import { Link } from "react-router-dom";
import Video from "./video";
import Image from "./image";
import FormLogin from "./form";

export default function() {
    return (
      <div>
      
        
        
        <Video />
        <div class="glow-on-hover">
         <form>
          <button formaction="/my-zumba">Sign Up!</button>
        
         </form>
        </div>
        <Image />
      
      </div>
    );
}
    