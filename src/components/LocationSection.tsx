import { useEffect, useState } from 'react'
import './LocationSection.css'
import { LocationIcon, CalendarIcon } from './Icons'
import quintaImage from '../assets/quinta.png'

const LocationSection = () => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section id="location" className="location-section">
      <div className="location-container">
        <h2 className={`location-title ${loaded ? 'fade-in' : ''}`}>
          <LocationIcon />
          <span>Ubicación del Evento</span>
        </h2>
        <div className="location-content">
          <div className={`location-info ${loaded ? 'slide-in' : ''}`} style={{ animationDelay: '0.2s' }}>
            <div className="location-address">
              <h3>Dirección</h3>
              <p>Pomarrosa 627, Pomarrosa</p>
              <p>29014 Tuxtla Gutiérrez, Chis.</p>
              <p className="location-date">
                <CalendarIcon />
                <span>7 de febrero del 2026</span>
              </p>
            </div>
            <div className="location-map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1234567890123!2d-93.12345678901234!3d16.75412345678901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQ1JzE0LjgiTiA5M8KwMDcnMjQuNCJX!5e0!3m2!1ses!2smx!4v1234567890123!5m2!1ses!2smx"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: '15px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación del Baby Shower"
              ></iframe>
              <div className="map-link-container">
                <a 
                  href="https://maps.app.goo.gl/7dma7N4jQLuraacw9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="map-link"
                >
                  Ver en Google Maps →
                </a>
              </div>
            </div>
          </div>
          <div className={`location-image-container ${loaded ? 'fade-in' : ''}`} style={{ animationDelay: '0.4s' }}>
            <div className="location-image">
              <img src={quintaImage} alt="Quinta Palmera" className="location-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationSection

