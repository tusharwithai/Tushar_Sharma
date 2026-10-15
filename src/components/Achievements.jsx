import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Achievements.css'

const stats = ['2+ YEARS', '2 PROJECTS', '1 MEDAL', '2 EVENTS ORGANIZED']

const achievements = [
  {
    label: '— ATHLETICS · MARCH 2026',
    heading: 'BRONZE MEDAL',
    sub: 'District Rewari Powerlifting Championship · 93kg Junior Category',
    body: 'Competed at the 2026 District Rewari Powerlifting Championship and earned a Bronze Medal in the 93kg Junior category. Maintained a rigorous training schedule and full athletic commitment while simultaneously pursuing B.Tech Computer Science studies. Discipline is not a metaphor — it\'s a practice.',
  },
  {
    label: '— AI COMMUNITY · NOVEMBER 2025',
    heading: 'PROMPTHEIST ORGANIZER',
    sub: 'Neuroplex · AI Promptathon',
    body: 'Designed and ran a three-round competitive prompt engineering competition from scratch at Neuroplex. Brought in industry expert sessions, created meaningful technical challenges, and built an AI community that didn\'t exist before. Organized for the people who take the craft seriously.',
  },
  {
    label: '— COMMUNITY SERVICE · AUGUST 2024',
    heading: 'NSS COMMITTEE MEMBER',
    sub: 'SRM IST Ghaziabad · National Service Scheme',
    body: 'Selected as an organizing committee member for NSS at SRM IST Ghaziabad. Led and participated in cleanliness drives, blood donation camps, and social awareness initiatives — demonstrating leadership and civic commitment beyond the technical domain.',
  },
]

const Achievements = () => {
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
    hidden:  { opacity: 0, y: 50 },
    visible: {
      opacity: 1, y: 0,
      transition: { type: 'spring', stiffness: 55, damping: 13, delay: i * 0.12 },
    },
  })

  return (
    <section className="section ach-section" id="achievements" ref={ref}>
      <div className="ach-watermark" aria-hidden="true">WINS</div>

      <motion.div
        className="section-inner"
        variants={stagger}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.span className="s-label" variants={fadeUp}>— RECOGNITION</motion.span>
        <motion.h2 className="s-heading" variants={fadeUp}>THE WINS</motion.h2>

        {/* Stats row */}
        <motion.div className="ach-stats" variants={fadeUp}>
          {stats.map((s, i) => (
            <div key={i} className="ach-stat-item">
              <span className="ach-stat-val">{s}</span>
            </div>
          ))}
        </motion.div>

        <div className="ach-grid">
          {achievements.map((a, i) => (
            <motion.article
              key={i}
              className="ach-card"
              variants={cardAnim(i)}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              <span className="ach-label s-label">{a.label}</span>
              <h3 className="ach-heading">{a.heading}</h3>
              <p className="ach-sub">{a.sub}</p>
              <p className="ach-body">{a.body}</p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Achievements
