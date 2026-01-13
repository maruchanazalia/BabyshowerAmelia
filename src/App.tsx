import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Countdown from './components/Countdown'
import ConfirmAttendance from './components/ConfirmAttendance'
import Gallery from './components/Gallery'
import LocationSection from './components/LocationSection'
import AboutSection from './components/AboutSection'
import GiftRegistrySection from './components/GiftRegistrySection'

function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      <Navbar scrollY={scrollY} />
      <HeroSection scrollY={scrollY} />
      <Countdown />
      <LocationSection />
      <AboutSection />
      <GiftRegistrySection />
      <ConfirmAttendance />
      <Gallery />
    </div>
  )
}

export default App
