import { useEffect, useState } from 'react'
import './ConfirmAttendance.css'
import { MessageIcon } from './Icons'

const ConfirmAttendance = () => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  const handleWhatsAppClick = () => {
    const phoneNumber = '9613594344'
    const message = encodeURIComponent('¡Hola! Confirmo mi asistencia al Baby Shower')
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="confirm" className="confirm-section">
      <div className="confirm-container">
        <h2 className={`confirm-title ${loaded ? 'fade-in' : ''}`}>
          Confirma tu asistencia
        </h2>
        <p className={`confirm-subtitle ${loaded ? 'fade-in' : ''}`} style={{ animationDelay: '0.2s' }}>
          Nos encantaría celebrar contigo este momento especial
        </p>
        <button
          className={`confirm-button ${loaded ? 'fade-in' : ''}`}
          onClick={handleWhatsAppClick}
          style={{ animationDelay: '0.4s' }}
        >
          <span className="whatsapp-icon">
            <MessageIcon />
          </span>
          <span>Confirma tu asistencia</span>
        </button>
      </div>
    </section>
  )
}

export default ConfirmAttendance

