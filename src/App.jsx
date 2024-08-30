import { useState } from 'react'
import './App.css'
import HeaderBar from './components/header'
import Footer from './components/footer'
import { Routes, Route } from 'react-router'
import { IoIosArrowUp } from "react-icons/io";
import LandingPage from './Pages/landingpage';
import VisaCountriesPage from './Pages/visaCountriesPage'
import VisaFormPage from './Pages/visaForm'


function App() {
  const handleClickTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div>
      <HeaderBar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/visa' element={<VisaCountriesPage />} />
        <Route path='/visa-form' element={<VisaFormPage />} />
      </Routes>
      <Footer/>
      <p className='take-to-top-btn' onClick={handleClickTop}>
        <IoIosArrowUp size={30} />
      </p>
    </div>
  )
}

export default App
