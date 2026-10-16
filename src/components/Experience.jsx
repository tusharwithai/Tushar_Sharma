import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Experience.css'

const roles = [
  {
    label: '— GUEST AI SPEAKER · JUL 2025',
    heading: 'E2E CLOUD',
    sub: 'TECHNICAL SPEAKER — ARTIFICIAL INTELLIGENCE',
    type: 'INDUSTRY SPEAKING · CLOUD & AI',
    body: 'Delivered a live technical presentation on Artificial Intelligence to an audience of engineers and professionals at E2E Cloud—one of India\'s leading cloud infrastructure providers. Broke down core architectures across Neural Networks, Natural Language Processing (NLP), and production AI workflows.',
    link: null,
  },
  {
    label: '— LEAD ORGANIZER · NOV 2025',
    heading: 'NEUROPLEX — PROMPTHEIST',
    sub: 'AI PROMPTATHON & INDUSTRY EXPERT SESSIONS',
    type: 'TECHNICAL LEADERSHIP · AI COMMUNITY',
    body: 'Conceptualized and spearheaded PromptHeist—a three-round competitive AI prompt engineering event featuring live sessions with industry experts. Designed technical evaluation challenges testing real-world LLM interaction and adversarial prompting skills end-to-end.',
    link: null,
  },
  {
    label: '— BRONZE MEDALIST · MAR 2026',
    heading: 'DISTRICT POWERLIFTING',
    sub: 'BRONZE MEDAL — DISTRICT POWERLIFTING CHAMPIONSHIP',
    type: 'ATHLETICS · EXECUTION UNDER PRESSURE',
    body: 'Earned the Bronze Medal at the District Powerlifting Championship. Forged the same relentless discipline, preparation, and high-pressure execution on the platform that I bring to engineering production AI systems.',
    link: { text: 'VIEW CERTIFICATE', url: '#' },
  },
  {
    label: '— ORGANIZING COMMITTEE MEMBER · AUG 2024',
    heading: 'NATIONAL SERVICE SCHEME (NSS)',
    sub: 'COMMUNITY LEADERSHIP & OPERATIONS',
    type: 'LEADERSHIP · SOCIAL IMPACT',
    body: 'Served on the Organizing Committee coordinating blood donation camps, cleanliness drives, and social awareness campaigns. Led ground-level volunteer logistics because building for people starts with showing up for them.',
    link: null,
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
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 60, damping: 14 } },
  }
  const cardAnim = (i) => ({
    hidden: { opacity: 0, x: -40 },
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
        <motion.span className="s-label" variants={fadeUp}>— ACHIEVEMENTS & LEADERSHIP</motion.span>
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
                <p className="exp-sub">{role.sub}</p>
                <p className="exp-type">{role.type}</p>
                <p className="exp-body">{role.body}</p>
                {role.link && (
                  <a
                    href={role.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="exp-cert-link"
                  >
                    {role.link.text} <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Experience
