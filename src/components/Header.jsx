import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>YourBrand</h1>
        </div>
        <nav className="nav">
          <a href="#about">About Us</a>
          <a href="#products">Our Products</a>
          <a href="#news">News</a>
          <a href="#contact">Contact Us</a>
        </nav>
        <div className="header-contact">
          <span>📞 +84 (24) 3200 3356</span>
        </div>
      </div>
    </header>
  )
}

export default Header
