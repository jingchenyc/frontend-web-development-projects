import React, {useState} from 'react'
import '../styles/forms.css'

// 這裡將實作一個有基本驗證的表單
// 同時加入複雜表單互動: 選擇 "Other Language" 時出現額外輸入欄位

function BookingForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [language, setLanguage] = useState('English')
  const [otherLang, setOtherLang] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // 簡易驗證: 必填 name 和 email
    if(!name.trim()) {
      setErrorMsg('Name is required.')
      return
    }
    if(!email.trim().includes('@') || !email.trim().includes('.')) {
      setErrorMsg('Please provide a valid email.')
      return
    }
    setErrorMsg('')
    setSubmitted(true)
  }

  return (
    <section className="booking-form-page">
      <h2>Book a Lesson</h2>
      {submitted ? (
        <p>Thank you for booking, {name}. We will contact you at {email} soon!</p>
      ) : (
        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="name-field">Name</label>
            <input 
              id="name-field" 
              type="text" 
              value={name} 
              onChange={(e)=>setName(e.target.value)}
            />
          </div>
          <div className="form-field">
            <label htmlFor="email-field">Email</label>
            <input 
              id="email-field" 
              type="text" 
              value={email} 
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className="form-field">
            <label htmlFor="language-select">Select language you want to learn</label>
            <select 
              id="language-select" 
              value={language} 
              onChange={(e)=>setLanguage(e.target.value)}
            >
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="Chinese">Chinese</option>
              <option value="French">French</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {language==='Other' && (
            <div className="form-field">
              <label htmlFor="other-lang">Please specify the language</label>
              <input 
                id="other-lang" 
                type="text" 
                value={otherLang}
                onChange={(e)=>setOtherLang(e.target.value)}
              />
            </div>
          )}

          {errorMsg && <p className="error-msg">{errorMsg}</p>}

          <button type="submit" className="submit-button">Submit</button>
        </form>
      )}
    </section>
  )
}

export default BookingForm
