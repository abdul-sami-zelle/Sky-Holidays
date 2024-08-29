import React from "react";
import './index.css'

export default function HeadingTitle1({heading, color, textAlign,marginBottom,marginTop}) {
    return(
        <div style={{color:color,textAlign:textAlign,marginBottom:marginBottom,marginTop:marginTop}} className="headingTitle1">
            {heading}
        </div>
    )
}