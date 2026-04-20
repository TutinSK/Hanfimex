import { NavLink } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <NavLink to="/">
            <h1>DAI LAM SPICES</h1>
          </NavLink>
        </div>
        <nav className="nav">
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/products">PRODUCTS</NavLink>
          <NavLink to="/certificates">CERTIFICATES</NavLink>
          <NavLink to="/about">ABOUT US</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
