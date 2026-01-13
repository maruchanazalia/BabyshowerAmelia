import { useEffect, useState } from 'react'
import './HeroSection.css'
import { CalendarIcon, LocationIcon } from './Icons'
import papasImage from '../assets/papas.jpg'
import lila1 from '../assets/lila1.png'
import lila2 from '../assets/lila2.png'
import lila3 from '../assets/lila3.png'
import lila4 from '../assets/lila4.png'

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
                <div className="info-value">Domingo</div>
                <div className="info-date">1 Feb. 2026</div>
                <div className="info-time">5:00 PM</div>
              </div>
            </div>
          </div>
          
          {/* Columna Centro: Foto e Invitación */}
          <div className="hero-column-center">
            <div className="hero-photo-frame">
              {/* Fondo decorativo con las imágenes de lila */}
              <div className="hero-photo-background">
                <img src={lila1} alt="" className="hero-bg-lila hero-bg-lila-1" />
                <img src={lila2} alt="" className="hero-bg-lila hero-bg-lila-2" />
                <img src={lila3} alt="" className="hero-bg-lila hero-bg-lila-3" />
                <img src={lila4} alt="" className="hero-bg-lila hero-bg-lila-4" />
              </div>
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
              <p className="hero-invitation">
                <span className="hero-names-mobile">Ramiro y Clarissa</span>
                <span className="hero-invitation-text"> te invitan a celebrar su Baby Shower</span>
              </p>
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

          {/* Contenedor móvil para Cuándo y Dónde */}
          <div className="hero-info-container-mobile">
            <div className="hero-info-item hero-info-when">
              <div className="info-icon">
                <CalendarIcon />
              </div>
              <div className="info-content">
                <div className="info-label">Cuándo:</div>
                <div className="info-value">Domingo</div>
                <div className="info-date">1 Feb. 2026</div>
                <div className="info-time">5:00 PM</div>
              </div>
            </div>
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

