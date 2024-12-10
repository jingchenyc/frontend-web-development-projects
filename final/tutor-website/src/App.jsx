import React, { useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Tutors from './pages/Tutors.jsx'
import About from './pages/About.jsx'
import BookingForm from './pages/BookingForm.jsx'
import Profile from './pages/Profile.jsx'
import NotFound from './pages/NotFound.jsx'


function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [username, setUsername] = useState('Guest')
  const [theme, setTheme] = useState('light')

  function navigate(page) {
    setCurrentPage(page)
  }

  function renderPage() {
    switch(currentPage) {
      case 'home': return <Home navigate={navigate} />
      case 'tutors': return <Tutors />
      case 'about': return <About />
      case 'booking': return <BookingForm />
      case 'profile': return <Profile username={username} setUsername={setUsername} />
      default: return <NotFound />
    }
  }

  return (
    <div className={`app-container theme-${theme}`}>
      <a href="#mainContent" className="skip-link">Skip to main content</a>
      <Header currentPage={currentPage} navigate={navigate} theme={theme} setTheme={setTheme} />
      <main id="mainContent" tabIndex="-1">
        {renderPage()}
      </main>
      <Footer />
    </div>
  )
}

export default App
