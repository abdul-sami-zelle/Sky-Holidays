import React from "react";
import back from '../../assets/arrow left.png'
import forward from '../../assets/arrow right.png'

function CircularButtons({type,onpressed}) {
    return(
       <div className="circularButton" onClick={onpressed}>
            <img src={type==='back'? back:forward} alt="" srcset="" />
       </div>
    )
}

export default CircularButtons;