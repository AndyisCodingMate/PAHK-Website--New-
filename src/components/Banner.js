import React from "react";
import backgroundImage from "../img/1.jpg"
import slide from "../img/14.gif" 
function Banner(){
    return(
        <React.Fragment>
            <div style={{ backgroundImage:`url(${backgroundImage})` }}>
                <img src={slide} alt="slide" />
            </div>


        </React.Fragment>
        
        

    )
}
export default Banner;