import React from 'react'
import Nav from './Nav.jsx'
import '../styles/header.css'
import logo from '../assets/logo.png';
import themeIcon from '../assets/theme-icon-dark.svg';

function Header({currentPage, navigate, theme, setTheme}) {
  return (
    <header className="site-header">
      <div className="header-branding" aria-label="Site branding">
        <img src={logo} alt="Language Tutors logo" className="header-logo"/>
        <h1 className="header-title">Language Tutors</h1>
      </div>
      <Nav currentPage={currentPage} navigate={navigate} />
      <button 
        type="button" 
        onClick={()=>setTheme(theme === 'light' ? 'dark' : 'light')} 
        className="theme-toggle-button" 
        aria-label="Toggle Light/Dark Theme"
      >
        <img src={themeIcon} alt="" aria-hidden="true"/>
      </button>
    </header>
  )
}

export default Header
