import React from "react";
import './index.css'
import CardDesign2 from "../../utils/CardDesign2";
import HeadingTitle1 from "../../utils/HeadingTitle1";

export default function Recommendations({heading}) {
    return(
        <div className="recommendationSection">
            <HeadingTitle1 textAlign={"center"} color={"var(--secondary-color)"} marginBottom={"30px"} marginTop={"0px"} heading={heading} />
            <div className="cardContainer">
                <CardDesign2/>   
                <CardDesign2/>   
                <CardDesign2/>   
                <CardDesign2/>   
                <CardDesign2/>   
                <CardDesign2/>    
                <CardDesign2/> 
                <CardDesign2/> 
                <CardDesign2/>   
            </div>
        </div>
    )
}