import React from 'react'
import './Navbar.css'

const Navbar = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="navbar">
      <div className="nav-logo">TS<span>.</span></div>
      <ul className="nav-links">
        <li onClick={() => scrollTo('projects')}>Projects</li>
        <li onClick={() => scrollTo('skills')}>Skills</li>
        <li onClick={() => scrollTo('experience')}>Experience</li>
        <li onClick={() => scrollTo('education')}>Education</li>
        <li onClick={() => scrollTo('contact')}>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar