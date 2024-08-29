import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderBar from './components/header'
import MainSlider from './components/mainSlider'
import SecondSection from './components/SecondCard'
import MainSearchBar from './utils/mainSearchBar'
import CardDesign2 from './utils/CardDesign2'
import Recommendations from './components/recommendationSection'
import Footer from './components/footer'
import CardDesign3 from './utils/CardDesign3'
import TopDestinationSlider from './components/topDestinations'
import SubscribeComponent from './components/Subscribe';
import { destinations } from './TestData/data'


const images = [
  "https://skyholidays.pk/wp-content/uploads/2022/12/Slider-22.png",
  "https://skyholidays.pk/wp-content/uploads/2022/12/Slider-33.png",
  "https://skyholidays.pk/wp-content/uploads/2022/12/Slider-11.png",
];


const SliderData2 = [
  {
    image:"https://skyholidays.pk/wp-content/uploads/2022/12/Slider-22.png"
  },
  {
    image:"https://skyholidays.pk/wp-content/uploads/2022/12/Slider-33.png"
  },
  {
    image:"https://skyholidays.pk/wp-content/uploads/2022/12/Slider-11.png"
  },
  
];

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeaderBar />
      <MainSlider slides={SliderData2} images={images} />
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
      <Footer />
    </>
  )
}

export default App
