import { useEffect, useState } from 'react'
import './HeroSection.css'
import { CalendarIcon, LocationIcon } from './Icons'
import papasImage from '../assets/papas.jpg'

interface HeroSectionProps {
  scrollY: number
}

const HeroSection = ({ scrollY }: HeroSectionProps) => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  const opacity = Math.max(0, 1 - scrollY / 500)
  const translateY = scrollY * 0.5

  return (
    <section 
      id="hero" 
      className={`hero-section ${loaded ? 'loaded' : ''}`}
      style={{
        opacity,
        transform: `translateY(${translateY}px)`
      }}
    >
      <div className="hero-content">
        <div className="hero-main-layout">
          {/* Columna Izquierda: Cuándo */}
          <div className="hero-column-left">
            <div className="hero-info-item hero-info-when">
              <div className="info-icon">
                <CalendarIcon />
              </div>
              <div className="info-content">
                <div className="info-label">Cuándo:</div>
                <div className="info-value">Viernes</div>
                <div className="info-date">7 Feb. 2026</div>
              </div>
            </div>
          </div>
          
          {/* Columna Centro: Foto e Invitación */}
          <div className="hero-column-center">
            <div className="hero-photo-frame">
              <div className="hero-photo">
                <img 
                  src={papasImage}
                  alt="Ramiro y Clarissa"
                  className="hero-image"
                />
              </div>
            </div>
            
            <div className="hero-text-content">
              <div className="hero-names">
                <h2>Ramiro</h2>
                <span className="and">&</span>
                <h2>Clarissa</h2>
              </div>
              <p className="hero-invitation">desean invitarte a celebrar su Baby Shower</p>
            </div>
          </div>
          
          {/* Columna Derecha: Dónde */}
          <div className="hero-column-right">
            <div className="hero-info-item hero-info-where">
              <div className="info-icon">
                <LocationIcon />
              </div>
              <div className="info-content">
                <div className="info-label">Dónde:</div>
                <div className="info-value">Pomarrosa 627,</div>
                <div className="info-location">Tuxtla Gutiérrez, Chis.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

