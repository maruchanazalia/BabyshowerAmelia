import { useEffect, useState } from 'react'
import './GiftRegistrySection.css'
import { GiftIcon } from './Icons'

const GiftRegistrySection = () => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  const handleLiverpoolClick = () => {
    window.open('https://mesaderegalos.liverpool.com.mx/milistaderegalos/51934279', '_blank')
  }

  return (
    <section id="gift-registry" className="gift-registry-section">
      <div className="gift-registry-container">
        <h2 className={`gift-registry-title ${loaded ? 'fade-in' : ''}`}>
          <GiftIcon />
          <span>Mesa de Regalos</span>
        </h2>
        <div className={`gift-registry-content ${loaded ? 'fade-in' : ''}`} style={{ animationDelay: '0.2s' }}>
          <div className="gift-registry-card">
            <div className="gift-registry-store">
              <h3>Liverpool</h3>
            </div>
            <div className="gift-registry-info">
              <p className="gift-registry-label">Número de mesa:</p>
              <p className="gift-registry-number">#51934279</p>
              <p className="gift-registry-note">Baby Shower</p>
            </div>
            <div className="gift-registry-date">
              <p>Puedes comprar regalos hasta el</p>
              <p className="gift-registry-date-value">02 de junio, 2026</p>
            </div>
            <button 
              className="gift-registry-button"
              onClick={handleLiverpoolClick}
            >
              Ver Mesa de Regalos →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GiftRegistrySection

