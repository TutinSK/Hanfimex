import { useState, useEffect } from 'react'
import './FloatingButtons.css'

// TODO: Thay ảnh placeholder bằng ảnh thật
// Đặt ảnh vào thư mục src/assets/icons/social/
import zaloImg from '../assets/icons/social/zalo.png'

function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="floating-buttons">
      <a
        href="https://zalo.me/0327324400"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn zalo-btn"
        title="Chat Zalo"
      >
        <img className="floating-icon-img" src={zaloImg} alt="Zalo" />
        <span className="floating-label">Zalo</span>
      </a>

      <a
        href="https://wa.me/84327324400"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn whatsapp-btn"
        title="Chat WhatsApp"
      >
        <svg className="floating-icon-img" viewBox="0 0 48 48" width="32" height="32">
          <circle cx="24" cy="24" r="24" fill="#25D366"/>
          <path d="M34.6 13.4C32 10.7 28.5 9.2 24.8 9.2c-7.5 0-13.6 6.1-13.6 13.6 0 2.4.6 4.7 1.8 6.8L11 37l7.6-2c2 1.1 4.2 1.6 6.5 1.6h0c7.5 0 13.6-6.1 13.6-13.6 0-3.6-1.4-7-4.1-9.6zm-9.8 20.9c-2 0-4-.5-5.7-1.5l-.4-.2-4.2 1.1 1.1-4.1-.3-.4c-1.1-1.8-1.7-3.8-1.7-5.9 0-6.2 5-11.2 11.2-11.2 3 0 5.8 1.2 7.9 3.3 2.1 2.1 3.3 4.9 3.3 7.9 0 6.2-5.1 11-11.2 11zm6.1-8.4c-.3-.2-1.9-1-2.2-1.1-.3-.1-.5-.2-.7.2s-.8 1.1-1 1.3c-.2.2-.3.2-.6.1-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-2-1.8-2.3-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.3 0-.5s-.7-1.7-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3 0-.2-.2-.3-.5-.4z" fill="#fff"/>
        </svg>
        <span className="floating-label">WhatsApp</span>
      </a>

      {showScrollTop && (
        <button
          className="floating-btn scroll-top-btn"
          onClick={scrollToTop}
          title="Lên đầu trang"
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="#fff">
            <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
          </svg>
        </button>
      )}
    </div>
  )
}

export default FloatingButtons
