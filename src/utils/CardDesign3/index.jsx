import React from "react";
import './index.css';

export default function CardDesign3({img,title}) {
    return(
       <div className="cardDesign3">
            <div className="thumbnail">
                <img src={img} alt="" />
            </div>
            <div className="title">
                {title}
            </div>
            <div className="description">
                14 Hotels
            </div>
       </div>
    )
}