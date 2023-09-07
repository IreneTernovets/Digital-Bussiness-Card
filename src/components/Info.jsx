import React from 'react'

const Info = () => {
  const handleButtonClickLinkedIn = () => {
    window.open("https://www.linkedin.com/in/irene-ternovets-189ab8153/", "_blank");
  }
  return (
    <header>
      <img src='./src/assets/hero-photo.jpg' className='hero-photo' />
      <h1>Irena Ternovets</h1>
      <h4>Front-End Developer</h4>
      <div className="contact-buttons">
        <button ><i class="fa-solid fa-envelope button-icon"></i>Email</button>
        <button onClick={handleButtonClickLinkedIn}><i class="fa-brands fa-linkedin button-icon"></i>LinkedIn</button>
      </div>
    </header>
  )
}

export default Info