import { useState, useEffect } from 'react'
import './Countdown.css'

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
    
    const targetDate = new Date('2026-02-01T17:00:00-06:00').getTime() // 1 de febrero 2026 a las 5:00 PM hora de México

    const updateCountdown = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="countdown" className="countdown-section">
      <div className="countdown-container">
        <h2 className={`countdown-title ${loaded ? 'fade-in' : ''}`}>
          Faltan para nuestro Baby Shower
        </h2>
        <div className={`countdown-grid ${loaded ? 'fade-in' : ''}`} style={{ animationDelay: '0.2s' }}>
          <div className="countdown-item">
            <div className="countdown-number">{timeLeft.days}</div>
            <div className="countdown-label">Días</div>
          </div>
          <div className="countdown-separator">:</div>
          <div className="countdown-item">
            <div className="countdown-number">{String(timeLeft.hours).padStart(2, '0')}</div>
            <div className="countdown-label">Horas</div>
          </div>
          <div className="countdown-separator">:</div>
          <div className="countdown-item">
            <div className="countdown-number">{String(timeLeft.minutes).padStart(2, '0')}</div>
            <div className="countdown-label">Minutos</div>
          </div>
          <div className="countdown-separator">:</div>
          <div className="countdown-item">
            <div className="countdown-number">{String(timeLeft.seconds).padStart(2, '0')}</div>
            <div className="countdown-label">Segundos</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Countdown

