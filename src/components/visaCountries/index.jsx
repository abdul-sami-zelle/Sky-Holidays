import React from "react";
import './index.css'
import CardDesign4 from "../../utils/CardDesign4";
import HeadingTitle1 from "../../utils/HeadingTitle1";
import { visaCountries } from "../../TestData/data";

export default function VisaCountries({heading}) {
    return(
        <div className="visaCountries">
            <div className="cardContainer">
                {
                    (visaCountries.map((item)=>(
                        <CardDesign4 img={item.image} name={item.name} />
                    )))
                } 
            </div>
        </div>
    )
}