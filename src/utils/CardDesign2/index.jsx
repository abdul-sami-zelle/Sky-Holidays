import React from "react";
import './index.css';
import lighting from "../../assets/lighting.png"

export default function CardDesign2({ img }) {
    return (
        <div className="cardDesign2">
            <div className="featuredImage">
                <div className="st_feature">
                    Featured
                </div>
                <div className="st_start">

                </div>
                <a href="">
                    <img src="https://skyholidays.pk/wp-content/uploads/2022/04/hotel-450x300.jpeg" alt="" />
                </a>
            </div>
            <div className="contentItem">
                <h4>
                    Hotel NAME
                </h4>
                <div className="section-footer">
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
                </div>
            </div>
        </div>
    );
}
