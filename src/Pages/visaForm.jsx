import { useState } from 'react'
import MainSlider from '../components/mainSlider'
import VisaCountries from '../components/visaCountries'
import { images,SliderData2 } from '../TestData/data'
import InputField2 from '../utils/inputFields2';
import './index.css'
import DynamicVisaForm from '../utils/form1';


export default function VisaFormPage() {
    return (
        <>
            <MainSlider slides={SliderData2} images={images} showSearchBar={false} />
           
            <div style={{
                display: "flex",
                flexDirection: "column",
                margin: "var(--landing-page-margins)"
            }}>
            <div className="mainVisaComponent">
                <div className="columnMVC">
klhk
                </div>
                <div className="columnMVC formSide">
                {/* <InputField2 label={"fiest"} />
                <InputField2 label={"fiest"} />
                <InputField2 label={"fiest"} /> */}
                <DynamicVisaForm visaType={"Qatar"} />
                </div>
            </div>
                
            </div>
        </>
    )
}