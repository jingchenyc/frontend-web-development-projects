import React, { useState } from 'react'
import '../styles/accordion.css'

// 簡單的 Accordion
function Accordion({title, children}) {
  const [open, setOpen] = useState(false)
  return (
    <div className="accordion">
      <button 
        className="accordion-toggle" 
        onClick={()=>setOpen(!open)} 
        aria-expanded={open}
        aria-controls={`section-${title}`}
      >
        {title}
      </button>
      <div 
        id={`section-${title}`} 
        className={`accordion-panel ${open?'open':''}`}
      >
        {children}
      </div>
    </div>
  )
}

export default Accordion
