import React from 'react';
import "./header.css";
import List from './List';
import logo from "../../images/logo.jpg"
import home from "../../images/home.png"
import explore from "../../images/geography.png"
import snapshots from "../../images/image.png"
import videos from "../../images/film.png"

const Header = () => {
  return (
    <>
    <div className="navbar">
        <div className="logo-container">
            <a href="#"><img className='logo' src={logo} alt="logo" /></a>
        </div>

        <div className="list-box">
          
            <List listName="Home" icon={home}/>
            <List listName="Explore" icon={explore} />
            <List listName="Snapshots" icon={snapshots} />
            <List listName="Videos" icon={videos}  />
            
        </div>

    </div>
    </>
  )
}

export default Header