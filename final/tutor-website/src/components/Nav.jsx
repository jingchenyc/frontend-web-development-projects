import React, {useState} from 'react'
import '../styles/nav.css'

function Nav({currentPage, navigate}) {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  // 簡易 dropdown/hamburger menu
  // 大螢幕: 顯示水平導航列
  // 小螢幕: 顯示漢堡選單按鈕，點擊後展開連結列表
  return (
    <nav className="primary-nav">
      <button 
        className="nav-toggle" 
        aria-expanded={menuOpen} 
        aria-controls="nav-menu"
        onClick={toggleMenu}
      >
        <span className="nav-toggle-label">Menu</span>
      </button>
      <ul id="nav-menu" className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <li>
          <button 
            className={`nav-link ${currentPage==='home'?'active':''}`} 
            onClick={()=>{navigate('home');setMenuOpen(false)}}
          >Home</button>
        </li>
        <li>
          <button 
            className={`nav-link ${currentPage==='tutors'?'active':''}`} 
            onClick={()=>{navigate('tutors');setMenuOpen(false)}}
          >Find Tutors</button>
        </li>
        <li>
          <button 
            className={`nav-link ${currentPage==='about'?'active':''}`} 
            onClick={()=>{navigate('about');setMenuOpen(false)}}
          >About</button>
        </li>
        <li>
          <button 
            className={`nav-link ${currentPage==='booking'?'active':''}`} 
            onClick={()=>{navigate('booking');setMenuOpen(false)}}
          >Book a Lesson</button>
        </li>
        <li>
          <button 
            className={`nav-link ${currentPage==='profile'?'active':''}`} 
            onClick={()=>{navigate('profile');setMenuOpen(false)}}
          >Profile</button>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
