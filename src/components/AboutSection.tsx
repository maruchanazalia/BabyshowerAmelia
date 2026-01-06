import { useEffect, useState } from 'react'
import './AboutSection.css'
import { UsersIcon, HeartIcon } from './Icons'

const AboutSection = () => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className={`about-title ${loaded ? 'fade-in' : ''}`}>
          <UsersIcon />
          <span>Nosotros</span>
        </h2>
        <div className={`about-content ${loaded ? 'fade-in' : ''}`} style={{ animationDelay: '0.2s' }}>
          <div className="about-card">
            <div className="about-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <h3>Ramiro Díaz Camacho</h3>
            <p>Papá</p>
          </div>
          <div className="about-heart">
            <HeartIcon />
          </div>
          <div className="about-card">
            <div className="about-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <h3>Clarissa Ruiz Aparicio</h3>
            <p>Mamá</p>
          </div>
        </div>
        <div className={`about-message ${loaded ? 'fade-in' : ''}`} style={{ animationDelay: '0.4s' }}>
          <p>Estamos emocionados de compartir este momento especial con ustedes</p>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

