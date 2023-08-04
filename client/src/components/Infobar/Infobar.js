import React from "react";
import './Infobar.css'
import closeIcon from '../icons/closeIcon.png'

const Infobar = ({room}) => {
  return (
    <div className="infoBar">
        <div className="leftInnerConatiner">
            
        <h3>You are in: {room}</h3></div>
        
        
        <div className="rightInnerContainer">
            <a href="/"><img src={closeIcon} alt="close image"/></a>
        </div>
    </div>
  )
}

export default Infobar








