import './Footer.css'
import zaloIcon from '../assets/icons/social/zalo.png'

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Useful Links</h3>
          <ul>
            {/* <li><a href="/">Home</a></li> */}
            <li><a href="/products">Products</a></li>
            <li><a href="/certificates">Certificates</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Info</h3>
          <div className="contact-item">
            <span className="icon">📍</span>
            <p>Factory:<br />
            Yen Bai Province, Vietnam</p>
          </div>
          <div className="contact-item">
            <span className="icon">📞</span>
            <p>WhatsApp: +84 327324400</p>
          </div>
          <div className="contact-item">
            <span className="icon">📧</span>
            <p>sales@dailamspices.com</p>
          </div>
        </div>

        <div className="footer-section">
          <h3>Social Media</h3>
          <div className="social-links">
            <a href="https://zalo.me/0327324400" target="_blank" rel="noopener noreferrer" className="social-link-item" aria-label="Zalo">
              <img src={zaloIcon} alt="Zalo" width="40" height="40" />
              <span>Zalo</span>
            </a>
            <a href="https://wa.me/84327324400" target="_blank" rel="noopener noreferrer" className="social-link-item" aria-label="WhatsApp">
              <svg viewBox="0 0 48 48" width="40" height="40">
                <circle cx="24" cy="24" r="22" fill="#25D366"/>
                <path d="M34.6 13.4C32 10.7 28.5 9.2 24.8 9.2c-7.5 0-13.6 6.1-13.6 13.6 0 2.4.6 4.7 1.8 6.8L11 37l7.6-2c2 1.1 4.2 1.6 6.5 1.6h0c7.5 0 13.6-6.1 13.6-13.6 0-3.6-1.4-7-4.1-9.6zm-9.8 20.9c-2 0-4-.5-5.7-1.5l-.4-.2-4.2 1.1 1.1-4.1-.3-.4c-1.1-1.8-1.7-3.8-1.7-5.9 0-6.2 5-11.2 11.2-11.2 3 0 5.8 1.2 7.9 3.3 2.1 2.1 3.3 4.9 3.3 7.9 0 6.2-5.1 11-11.2 11zm6.1-8.4c-.3-.2-1.9-1-2.2-1.1-.3-.1-.5-.2-.7.2s-.8 1.1-1 1.3c-.2.2-.3.2-.6.1-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-2-1.8-2.3-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.3 0-.5s-.7-1.7-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3 0-.2-.2-.3-.5-.4z" fill="#fff"/>
              </svg>
              <span>WhatsApp</span>
            </a>
            <a href="https://t.me/YOUR_TELEGRAM" target="_blank" rel="noopener noreferrer" className="social-link-item" aria-label="Telegram">
              <svg viewBox="0 0 48 48" width="40" height="40">
                <circle cx="24" cy="24" r="22" fill="#2AABEE"/>
                <path d="M33.3 15.1l-3.7 17.5c-.3 1.2-.9 1.5-1.9 1l-5.2-3.8-2.5 2.4c-.3.3-.5.5-1 .5l.4-5.3 9.6-8.7c.4-.4-.1-.6-.6-.2l-11.9 7.5-5.1-1.6c-1.1-.3-1.1-1.1.2-1.7l20-7.7c.9-.4 1.7.2 1.4 1.5l-.7-.4z" fill="#fff"/>
              </svg>
              <span>Telegram</span>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 YourBrand. All rights reserved. | Privacy Policy | Terms Of Use</p>
      </div>
    </footer>
  )
}

export default Footer
