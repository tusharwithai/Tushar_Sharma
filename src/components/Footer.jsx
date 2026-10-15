import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top-line" aria-hidden="true" />
      <div className="footer-inner">
        <div className="footer-left">
          <span className="footer-name">TUSHAR SHARMA</span>
          <span className="footer-tagline">Engineering Intelligence. One Model at a Time.</span>
        </div>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/tusharwithai" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
          <span className="footer-sep" aria-hidden="true">·</span>
          <a href="mailto:tushar.sh6289@gmail.com" className="footer-link">Email</a>
        </div>
      </div>
      <div className="footer-copyright">
        <span>© {new Date().getFullYear()} Tushar Sharma. All rights reserved.</span>
      </div>
    </footer>
  )
}

export default Footer
