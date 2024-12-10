import React, { useState } from 'react'
import '../styles/nav.css'

function Nav({ currentPage, navigate }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav className="primary-nav">
      <button
        className="nav-toggle"
        aria-expanded={menuOpen}
        aria-controls="nav-menu"
        onClick={toggleMenu}
      >
        ☰
      </button>
      <ul id="nav-menu" className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <button
          className="close-button"
          aria-label="Close Menu"
          onClick={closeMenu}
        >
          ×
        </button>
        <li>
          <a
            href="#home"
            className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault()
              navigate('home')
              closeMenu()
            }}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#tutors"
            className={`nav-link ${currentPage === 'tutors' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault()
              navigate('tutors')
              closeMenu()
            }}
          >
            Find Tutors
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault()
              navigate('about')
              closeMenu()
            }}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#booking"
            className={`nav-link ${currentPage === 'booking' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault()
              navigate('booking')
              closeMenu()
            }}
          >
            Book a Lesson
          </a>
        </li>
        <li>
          <a
            href="#profile"
            className={`nav-link ${currentPage === 'profile' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault()
              navigate('profile')
              closeMenu()
            }}
          >
            Profile
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
