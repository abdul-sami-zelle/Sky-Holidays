import React from "react";
import './index.css';
import HeadingTitle2 from "../../utils/HeadingTitle2";
import Paragraph2 from "../../utils/Paragraph2";
import InputFieldWithBtn from "../../utils/InputWithButton";

export default function SubscribeComponent(params) {
    return (
        <div className="subscribeComponent">
            <div className="imgSection">
                {/* Image section will be displayed here */}
            </div>
            <div className="contentSection">
                <HeadingTitle2 heading={"Get special offers, and more from Burhan Tourism"} marginBottom={"20px"} />
                <Paragraph2 content={"Subscribe to see secret deals prices drop the moment you sign up!"} textAlign={"center"} color={"var(--seconday-color)"} margin={"0px 0px 30px 0px"} padding={"0px 050px 0px 50px"} />

                <InputFieldWithBtn/>
            </div>  
        </div>
    );
}
