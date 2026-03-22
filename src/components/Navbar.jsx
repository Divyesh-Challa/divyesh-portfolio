import { useState, useEffect } from 'react'

const links = ['About', 'Projects', 'Skills', 'Contact']

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <>
      <nav className="navbar" style={{ boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.4)' : 'none' }}>
        <a href="#hero" className="navbar-logo">
          Divyesh<span>.</span>
        </a>

        <ul className="navbar-links">
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`}>{link}</a>
            </li>
          ))}
          <li>
            <a href="mailto:divyeshchallavgr@gmail.com" className="btn btn-primary">
              Hire Me
            </a>
          </li>
        </ul>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={handleNavClick}
          >
            {link}
          </a>
        ))}
        <a href="mailto:divyeshchallavgr@gmail.com" className="btn btn-primary" style={{ textAlign: 'center' }}>
          Hire Me
        </a>
      </div>
    </>
  )
}
