import { useState } from 'react'
import MainSlider from '../components/mainSlider'
import SecondSection from '../components/SecondCard'
import Recommendations from '../components/recommendationSection'
import TopDestinationSlider from '../components/topDestinations'
import SubscribeComponent from '../components/Subscribe';
import { images,SliderData2 } from '../TestData/data'


export default function LandingPage() {
    return (
        <>
            <MainSlider slides={SliderData2} images={images} showSearchBar={true} />
            <div style={{
                display: "flex",
                flexDirection: "column",
                margin: "var(--landing-page-margins)"
            }}>
                <SecondSection />
                <TopDestinationSlider />
                <Recommendations heading={"Recommended Tours For You"} />
                <Recommendations heading={"Recommended Excursions For You"} />

                <SubscribeComponent />
            </div>
        </>
    )
}