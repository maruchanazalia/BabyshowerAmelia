import { useState, useEffect } from 'react'
import './Gallery.css'
import { CameraIcon } from './Icons'
import clari1 from '../assets/clari.jpg'
import clari2 from '../assets/clari2.jpg'
import clari3 from '../assets/clari3.jpg'
import clari4 from '../assets/clari4.jpg'
import clari5 from '../assets/clari5.jpg'
import fam1 from '../assets/fam1.jpg'
import fam2 from '../assets/fam2.jpg'
import niñas1 from '../assets/niñas.jpg'
import niñas2 from '../assets/niñas2.jpg'

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  const images = [
    { id: 1, src: clari1, alt: 'Foto de embarazo 1' },
    { id: 2, src: clari2, alt: 'Foto de embarazo 2' },
    { id: 3, src: clari3, alt: 'Foto de embarazo 3' },
    { id: 4, src: clari4, alt: 'Foto de embarazo 4' },
    { id: 5, src: clari5, alt: 'Foto de embarazo 5' },
    { id: 6, src: fam1, alt: 'Familia 1' },
    { id: 7, src: fam2, alt: 'Familia 2' },
    { id: 8, src: niñas1, alt: 'Niñas 1' },
    { id: 9, src: niñas2, alt: 'Niñas 2' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [images.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-container">
        <h2 className={`gallery-title ${loaded ? 'fade-in' : ''}`}>
          <CameraIcon />
          <span>Galería</span>
        </h2>
        <p className={`gallery-subtitle ${loaded ? 'fade-in' : ''}`} style={{ animationDelay: '0.2s' }}>
          Nuestro hermoso camino juntos
        </p>
        <div className={`gallery-slider ${loaded ? 'fade-in' : ''}`} style={{ animationDelay: '0.4s' }}>
          <button className="gallery-nav gallery-nav-prev" onClick={goToPrevious}>
            ‹
          </button>
          <div className="gallery-slides">
            {images.map((image, index) => (
              <div
                key={image.id}
                className={`gallery-slide ${index === currentIndex ? 'active' : ''}`}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="gallery-image"
                />
              </div>
            ))}
          </div>
          <button className="gallery-nav gallery-nav-next" onClick={goToNext}>
            ›
          </button>
        </div>
        <div className="gallery-dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={`gallery-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Ir a la imagen ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery

