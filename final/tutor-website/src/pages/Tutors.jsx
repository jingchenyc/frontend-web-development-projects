import React, { useState } from 'react'
import TutorCard from '../components/TutorCard.jsx'
import '../styles/tutors.css'
import tutor1 from '../assets/tutors/tutor1.jpg';
import tutor2 from '../assets/tutors/tutor2.jpg';
import tutor3 from '../assets/tutors/tutor3.jpg';
import tutor4 from '../assets/tutors/tutor4.jpg';   

const tutorsData = [
  {name: 'Alice Lee', language: 'Chinese', rate: 20, image: tutor1},
  {name: 'Carlos Garcia', language: 'Spanish', rate: 18, image: tutor2},
  {name: 'Marie Dubois', language: 'French', rate: 22, image: tutor3},
  {name: 'Jennie Smith', language: 'English', rate: 25, image: tutor4},
]

function Tutors() {
  const [filterLang, setFilterLang] = useState('All')
  const [sortOrder, setSortOrder] = useState('asc')

  const filtered = tutorsData.filter(tutor=>{
    return filterLang==='All'? true : tutor.language===filterLang
  })
  const sorted = filtered.sort((a,b)=>{
    if(sortOrder==='asc') return a.rate - b.rate
    return b.rate - a.rate
  })

  return (
    <section className="tutors-page">
      <h2>Find Your Tutor</h2>
      <form className="tutors-filter-form">
        <label htmlFor="filter-lang">Filter by Language:</label>
        <select 
          id="filter-lang" 
          value={filterLang} 
          onChange={(e)=>setFilterLang(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Chinese">Chinese</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
          <option value="English">English</option>
        </select>

        <label htmlFor="sort-order">Sort by Rate:</label>
        <select 
          id="sort-order" 
          value={sortOrder} 
          onChange={(e)=>setSortOrder(e.target.value)}
        >
          <option value="asc">Lowest to Highest</option>
          <option value="desc">Highest to Lowest</option>
        </select>
      </form>

      <div className="tutors-grid">
        {sorted.map((tutor,idx)=>(
          <TutorCard key={idx} {...tutor}/>
        ))}
      </div>
    </section>
  )
}

export default Tutors
