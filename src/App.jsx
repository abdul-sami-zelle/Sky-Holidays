import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderBar from './components/header'
import MainSlider from './components/mainSlider'
import SecondSection from './components/SecondCard'
import MainSearchBar from './utils/mainSearchBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <HeaderBar/>
     <MainSlider/>
     <SecondSection/>
    </>
  )
}

export default App
