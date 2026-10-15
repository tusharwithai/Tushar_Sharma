import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Education.css'

const degrees = [
  {
    label: '— 2023 – 2027 · FULL-TIME',
    heading: 'SRM IST GHAZIABAD',
    sub: 'B.Tech · Computer Science and Engineering',
    location: 'Ghaziabad, Uttar Pradesh, India',
    highlights: [
      'Specializing in Artificial Intelligence, Machine Learning, and Computer Vision',
      'Coursework covers deep learning architectures, data structures, algorithms, and software engineering',
      'Actively building production-grade AI systems alongside academic study',
      'Involved in technical event organization and community leadership through NSS',
    ],
  },
  {
    label: '— GRADUATED 2023 · CBSE',
    heading: 'JAIN PUBLIC SCHOOL',
    sub: 'Class XII · PCM (Physics, Chemistry, Mathematics)',
    location: 'Rewari, Haryana, India',
    highlights: [
      'Completed the Physics, Chemistry, and Mathematics stream under CBSE',
      'Built the quantitative and analytical foundation underpinning all engineering work',
      'Developed early interest in programming and problem-solving during this period',
    ],
  },
]

const Education = () => {
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

  return (
    <section className="section edu-section" id="education" ref={ref}>
      <div className="edu-watermark" aria-hidden="true">EDU</div>

      <motion.div
        className="section-inner"
        variants={stagger}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.span className="s-label" variants={fadeUp}>— EDUCATION</motion.span>
        <motion.h2 className="s-heading" variants={fadeUp}>THE FOUNDATION</motion.h2>

        <div className="edu-grid">
          {degrees.map((deg, i) => (
            <motion.article
              key={i}
              className="edu-card"
              variants={fadeUp}
            >
              <span className="edu-label s-label">{deg.label}</span>
              <h3 className="edu-heading">{deg.heading}</h3>
              <p className="edu-sub">{deg.sub}</p>
              <p className="edu-location">
                <span className="loc-icon">◈</span> {deg.location}
              </p>
              <ul className="edu-highlights">
                {deg.highlights.map((h, hi) => (
                  <li key={hi}>{h}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Education
