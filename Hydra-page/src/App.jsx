import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Carousel from './components/Carousel'


function App() {
  

  return (
    <>
    <Navbar/>
    <HeroSection/>
    <About/>
    <Carousel/>
    
    </>
  )
}

export default App
