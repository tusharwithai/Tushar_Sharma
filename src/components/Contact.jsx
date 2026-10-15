import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import './Contact.css'

const Contact = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.18 } },
  }
  const fadeUp = {
    hidden:  { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 60, damping: 14 } },
  }

  const contactItems = [
    { icon: '✉', label: 'Email',    val: 'tushar.sh6289@gmail.com',        href: 'mailto:tushar.sh6289@gmail.com' },
    { icon: '☎', label: 'Phone',    val: '+91 90506 97416',                href: 'tel:+919050697416' },
    { icon: '◈', label: 'Location', val: 'Ghaziabad, Uttar Pradesh, India', href: null },
    { icon: '⌁', label: 'LinkedIn', val: 'linkedin.com/in/tusharwithai',   href: 'https://www.linkedin.com/in/tusharwithai' },
  ]

  return (
    <section className="section contact-section" id="contact" ref={ref}>
      <div className="contact-watermark" aria-hidden="true">CONTACT</div>

      <motion.div
        className="section-inner"
        variants={stagger}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.span className="s-label" variants={fadeUp}>— GET IN TOUCH</motion.span>
        <motion.h2 className="s-heading" variants={fadeUp}>LET'S BUILD<br />SOMETHING</motion.h2>
        <motion.p className="contact-sub" variants={fadeUp}>
          Whether it's a collaboration, an opportunity, or just a conversation about AI — I'm in.
        </motion.p>

        <div className="contact-grid">
          {/* Left: contact info */}
          <motion.div className="contact-info" variants={fadeUp}>
            {contactItems.map((item, i) => (
              <div key={i} className="contact-item">
                <span className="contact-icon">{item.icon}</span>
                <div className="contact-detail">
                  <span className="contact-label">{item.label}</span>
                  {item.href ? (
                    <a href={item.href} className="contact-val" target="_blank" rel="noopener noreferrer">
                      {item.val}
                    </a>
                  ) : (
                    <span className="contact-val">{item.val}</span>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right: form */}
          <motion.form className="contact-form" onSubmit={handleSubmit} variants={fadeUp}>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="contact-name">Full Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="contact-email">Email Address</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="contact-subject">Subject</label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                placeholder="What's this about?"
                value={form.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                placeholder="Your message..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="st-btn contact-btn">
              {sent ? 'MESSAGE SENT ✓' : 'SEND MESSAGE'}
            </button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
