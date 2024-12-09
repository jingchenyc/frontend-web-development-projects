import React, { useState } from 'react'
import '../styles/modal.css'

function ModalProfileForm({open, onClose, username, setUsername}) {
  const [tempName, setTempName] = useState(username)
  const dialogRef = React.useRef(null)

  React.useEffect(()=>{
    if(open) {
      dialogRef.current.showModal()
    } else {
      if(dialogRef.current.open) {
        dialogRef.current.close()
      }
    }
  },[open])

  const handleSubmit = (e) => {
    e.preventDefault()
    setUsername(tempName.trim() === ''? 'Guest': tempName)
    onClose()
  }

  return (
    <dialog ref={dialogRef} aria-labelledby="profile-form-title">
      <form method="dialog" onSubmit={handleSubmit} className="modal-form">
        <h2 id="profile-form-title">Edit Profile</h2>
        <label htmlFor="username-field">Display Name</label>
        <input 
          id="username-field" 
          type="text" 
          value={tempName} 
          onChange={(e)=>setTempName(e.target.value)} 
        />
        <div className="modal-buttons">
          <button type="submit" className="save-button">Save</button>
          <button type="button" onClick={onClose} className="cancel-button">Cancel</button>
        </div>
      </form>
    </dialog>
  )
}

export default ModalProfileForm
