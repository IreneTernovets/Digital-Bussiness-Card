import React from 'react'

const Info = () => {
  return (
    <header>
      <img src='./src/assets/hero-photo.jpg' className='hero-photo' />
      <h1>Irena Ternovets</h1>
      <h4>Front-End Developer</h4>
      <div className="contact-buttons">
        <button><i class="fa-solid fa-envelope"></i>Email</button>
        <button><i class="fa-brands fa-linkedin"></i>LinkedIn</button>
      </div>
    </header>
  )
}

export default Info