import React from 'react'
import Accordion from '../components/Accordion.jsx'
import '../styles/about.css'

function About() {
  return (
    <section className="about-page">
      <h2>About Language Tutors</h2>
      <p>We connect learners around the world with professional language tutors. Our mission is to help everyone achieve language fluency through personalized, one-on-one lessons.</p>

      <h3>Frequently Asked Questions</h3>
      <Accordion title="How do I book a lesson?">
        <p>Simply go to the 'Book a Lesson' page, select a tutor, and choose a time that works for you.</p>
      </Accordion>
      <Accordion title="Can I change my tutor later?">
        <p>Yes, you may choose a different tutor at any time. Your learning journey is flexible.</p>
      </Accordion>
      <Accordion title="Do you offer group lessons?">
        <p>Currently, we focus on one-on-one lessons, but group lessons may be introduced in the future.</p>
      </Accordion>
    </section>
  )
}

export default About
