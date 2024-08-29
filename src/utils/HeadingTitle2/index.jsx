import React from "react";
import './index.css'

export default function HeadingTitle2({heading, color, textAlign,marginBottom,marginTop}) {
    return(
        <div style={{color:color,textAlign:textAlign,marginBottom:marginBottom,marginTop:marginTop}} className="headingTitle2">
            {heading}
        </div>
    )
}