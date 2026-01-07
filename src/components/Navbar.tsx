import { useState, useEffect, useRef } from 'react'
import './Navbar.css'
import { RibbonIcon } from './Icons'

interface NavbarProps {
  scrollY: number
}

const Navbar = ({ scrollY }: NavbarProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const menuRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    setIsVisible(scrollY > 300)
  }, [scrollY])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        const target = event.target as HTMLElement
        if (!target.closest('.navbar-toggle')) {
          setIsMobileMenuOpen(false)
        }
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <>
      <div 
        className={`navbar-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />
      <nav className={`navbar ${isVisible ? 'visible' : ''}`}>
        <div className="navbar-content">
          <div className="navbar-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <RibbonIcon />
            <span>Baby Shower</span>
          </div>
          <button 
            className="navbar-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
          <ul ref={menuRef} className={`navbar-menu ${isMobileMenuOpen ? 'open' : ''}`}>
            <li onClick={() => scrollToSection('location')}>Lugar</li>
            <li onClick={() => scrollToSection('about')}>Nosotros</li>
            <li onClick={() => scrollToSection('countdown')}>Cronómetro</li>
            <li onClick={() => scrollToSection('confirm')}>Confirmar asistencia</li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar

