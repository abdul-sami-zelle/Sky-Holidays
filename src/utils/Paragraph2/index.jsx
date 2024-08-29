import React from "react";
import './index.css'

export default function Paragraph2({content, color, textAlign,margin,padding}) {
    return(
        <div style={{color:color,textAlign:textAlign,margin:margin,padding:padding}} className="paragraph2">
            {content}
        </div>
    )
}