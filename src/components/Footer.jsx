import './Footer.css'

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Useful Links</h3>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#products">Our Products</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Info</h3>
          <div className="contact-item">
            <span className="icon">📍</span>
            <p>Business registration address:<br />
            123 Business Street, District, City, Vietnam</p>
          </div>
          <div className="contact-item">
            <span className="icon">📞</span>
            <p>Export: +84 (24) 3200 3356<br />
            Logistics: +84 332 436 566</p>
          </div>
          <div className="contact-item">
            <span className="icon">📧</span>
            <p>export@yourbrand.com</p>
          </div>
        </div>

        <div className="footer-section">
          <h3>Social Media</h3>
          <div className="social-links">
            <a href="#linkedin" aria-label="LinkedIn">🔗</a>
            <a href="#facebook" aria-label="Facebook">📘</a>
            <a href="#youtube" aria-label="YouTube">📹</a>
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
