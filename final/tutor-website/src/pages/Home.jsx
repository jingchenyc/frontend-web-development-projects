import React from 'react'
import '../styles/home.css'
import tutor1 from '../assets/tutors/tutor1.jpg';

function Home() {
  return (
    <section className="home-page">
      <h2>Welcome to Language Tutors</h2>
      <p>Find the perfect tutor to help you master a new language. Personalized lessons, flexible scheduling, and a global community of learners await you.</p>
      <img src={tutor1} alt="A tutor teaching online" className="home-hero-image"/>
      <p>Browse our curated list of professional tutors and start your language journey today!</p>
    </section>
  )
}

export default Home
