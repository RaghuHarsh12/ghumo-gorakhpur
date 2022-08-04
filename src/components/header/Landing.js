import React from 'react'
import "./landing.css"
import Fade from 'react-reveal/Fade';
import namaste from "../../images/namaste.png" 

const Landing = () => {
  return (
    <div className='landing'>
        <div className="landing-content">
            
            <div className="landing-heading">
                <Fade bottom>
                <img src={namaste} alt="" className="namaste" />
                </Fade>
            </div>
            
            <div className="landing-text">
                <Fade bottom>
                "Welcome to the Holy City of Baba Gorakshnath"
                </Fade>
            </div>
        </div>
    </div>
  )
}

export default Landing