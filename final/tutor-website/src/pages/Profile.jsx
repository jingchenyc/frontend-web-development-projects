import React, { useState } from 'react'
import ModalProfileForm from '../components/ModalProfileForm.jsx'
import '../styles/forms.css'

function Profile({username, setUsername}) {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section className="profile-page">
      <h2>User Profile</h2>
      <p>Hello, {username}!</p>
      <button 
        type="button" 
        className="edit-profile-button" 
        onClick={()=>setModalOpen(true)}
      >
        Edit Profile Name
      </button>
      <ModalProfileForm 
        open={modalOpen} 
        onClose={()=>setModalOpen(false)} 
        username={username} 
        setUsername={setUsername}
      />
    </section>
  )
}

export default Profile
