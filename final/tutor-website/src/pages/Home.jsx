import React from 'react'
import '../styles/home.css'
import tutor1 from '../assets/tutors/tutor1.jpg';

function Home({ navigate }) {
    return (
      <section className="hero-section">
        <div className="hero-inner">
          <div className="hero-text-block">
            <h1 className="hero-title">
              <span className="highlight-background">Learn faster with your best language tutor.</span>
            </h1>
            <a 
              href="#tutors" 
              className="cta-button" 
              onClick={(e) => { 
                e.preventDefault(); 
                navigate('tutors'); 
              }}
            >
              Get started →
            </a>
            
          </div>
          <div className="hero-image-block">
            <img src={tutor1} alt="A tutor teaching online" className="hero-image"/>
            <img src={tutor1} alt="" aria-hidden="true" className="hero-image duplicate-image-1"/>
            <img src={tutor1} alt="" aria-hidden="true" className="hero-image duplicate-image-2"/>
          </div>
        </div>
      </section>
    )
  }
  
  export default Home