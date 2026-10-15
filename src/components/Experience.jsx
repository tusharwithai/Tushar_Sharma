import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Experience.css'

const roles = [
  {
    label: '— GUEST SPEAKER · JUL 2025',
    heading: 'E2E CLOUD',
    type: 'Volunteering · Science & Technology',
    sub: null,
    body: 'Delivered a live technical presentation on Artificial Intelligence to a professional audience at E2E Cloud — one of India\'s leading cloud infrastructure companies. Covered core concepts including Neural Networks, Natural Language Processing (NLP), and the rapidly evolving AI landscape. Represented emerging engineering talent on a real industry stage.',
  },
  {
    label: '— ORGANIZER · NOV 2025',
    heading: 'NEUROPLEX',
    sub: 'PromptHeist — AI Promptathon',
    type: 'Volunteering · AI Community',
    body: 'Conceptualized and organized PromptHeist — a competitive prompt engineering event featuring three progressive technical rounds and live sessions with industry experts. Built an AI practitioner community from scratch, created structured challenges testing real LLM interaction skills, and ran the entire event end-to-end.',
  },
  {
    label: '— NSS COMMITTEE MEMBER · AUG 2024',
    heading: 'SRM IST GHAZIABAD',
    sub: 'National Service Scheme',
    type: 'Community Service',
    body: 'Actively participated in community welfare initiatives including cleanliness drives, blood donation camps, and social awareness campaigns. Dedicated to fostering civic responsibility and contributing to social welfare. Because building for people starts with showing up for them.',
  },
]

const Experience = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.18 } },
  }
  const fadeUp = {
    hidden:  { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 60, damping: 14 } },
  }
  const cardAnim = (i) => ({
    hidden:  { opacity: 0, x: -40 },
    visible: {
      opacity: 1, x: 0,
      transition: { type: 'spring', stiffness: 55, damping: 13, delay: i * 0.15 },
    },
  })

  return (
    <section className="section exp-section" id="experience" ref={ref}>
      <div className="exp-watermark" aria-hidden="true">RECORD</div>

      <motion.div
        className="section-inner"
        variants={stagger}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.span className="s-label" variants={fadeUp}>— EXPERIENCE</motion.span>
        <motion.h2 className="s-heading" variants={fadeUp}>THE RECORD</motion.h2>

        <div className="exp-list">
          {roles.map((role, i) => (
            <motion.article
              key={i}
              className="exp-card"
              variants={cardAnim(i)}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              <div className="exp-line" aria-hidden="true" />
              <div className="exp-dot" aria-hidden="true" />
              <div className="exp-content">
                <span className="exp-label s-label">{role.label}</span>
                <h3 className="exp-heading">{role.heading}</h3>
                {role.sub && <p className="exp-sub">{role.sub}</p>}
                <p className="exp-type">{role.type}</p>
                <p className="exp-body">{role.body}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Experience
