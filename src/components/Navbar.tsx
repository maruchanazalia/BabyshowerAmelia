import { useState, useEffect } from 'react'
import './Navbar.css'
import { RibbonIcon } from './Icons'

interface NavbarProps {
  scrollY: number
}

const Navbar = ({ scrollY }: NavbarProps) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(scrollY > 300)
  }, [scrollY])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav className={`navbar ${isVisible ? 'visible' : ''}`}>
      <div className="navbar-content">
        <div className="navbar-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <RibbonIcon />
          <span>Baby Shower</span>
        </div>
        <ul className="navbar-menu">
          <li onClick={() => scrollToSection('location')}>Lugar</li>
          <li onClick={() => scrollToSection('about')}>Nosotros</li>
          <li onClick={() => scrollToSection('countdown')}>Cronómetro</li>
          <li onClick={() => scrollToSection('confirm')}>Confirmar asistencia</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

