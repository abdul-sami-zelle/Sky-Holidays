import React from "react";
import './index.css';
import lighting from "../../assets/lighting.png"
import location2 from "../../assets/location2.png"

export default function CardDesign4({ img , name }) {
    return (
        <div className="cardDesign4">
            <div className="featuredImage">
                {/* <div className="st_feature">
                    Featured
                </div>
                <div className="st_start">

                </div> */}
                <a href="">
                    <img src={img} alt="" />
                </a>
            </div>
            <div className="contentItem">
                <img src={location2} alt="" />
                <h4>
                    {name}
                </h4>
                {/* <div className="section-footer">
                    <div className="reviews">
                        <span className="rate">0/5 Not Rated</span>
                        <span className="summary">No Review</span>
                    </div>
                    <div className="price-wrapper">
                        <img src={lighting} alt="" />
                        from 
                        <span className="price">$1900</span>
                        <span className="unit">$1900</span>
                    </div>
                </div> */}
            </div>
        </div>
    );
}
