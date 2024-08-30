import { useState } from 'react'
import MainSlider from '../components/mainSlider'
import VisaCountries from '../components/visaCountries'
import { images,SliderData2 } from '../TestData/data'
import InputField2 from '../utils/inputFields2'


export default function VisaCountriesPage() {
    return (
        <>
            <MainSlider slides={SliderData2} images={images} showSearchBar={false} />
            <div style={{
                display: "flex",
                flexDirection: "column",
                margin: "var(--landing-page-margins)"
            }}>
                <VisaCountries />
            </div>
        </>
    )
}