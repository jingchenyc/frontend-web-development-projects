import React from 'react'
import '../styles/cards.css'

function TutorCard({ name, language, rate, image }) {
  return (
    <article className="tutor-card">
      <img src={image} alt={`Photo of tutor ${name}`} className="tutor-card-image"/>
      <div className="tutor-card-content">
        <h3 className="tutor-card-name">{name}</h3>
        <p className="tutor-card-language">Teaches: {language}</p>
        <p className="tutor-card-rate">Rate: ${rate}/hr</p>
      </div>
    </article>
  )
}

export default TutorCard
