import React from 'react'
import "./list.css";
import home from "../../images/home.png"

const List = (props) => {
  return (
    <div className='list-container'>
        <div className="content">
          <a className='navigation' href="#">

         
          <img className='list-icon' src={props.icon} alt="" /> 
          <span  className='list-text'>{props.listName}</span> 
          </a>
          </div>
    </div>
  )
}

export default List