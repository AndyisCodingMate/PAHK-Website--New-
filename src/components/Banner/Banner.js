import React from "react";
import Myslider from "./Myslider";

function Banner() {
  let Slideshow;
  let style = "img-container";
  let moto;
  switch(window.location.pathname){
    case"/aboutus":
      Slideshow = ()=> <img src="image/7.jpg" alt="slideshow"/>;
      style = "img-container2"
      moto = "Far and away ,the best prize that life offers is the chance to work hard at work worth doing."
      break;
    default:
      Slideshow = Myslider

  }
  
  return (
    <React.Fragment>
      <div className="banner-container">
        
      <div className={style}>
      <div className="moto">{moto}</div>
        <Slideshow/>
      </div>
      
      </div>
    </React.Fragment>
  );
}
export default Banner;
