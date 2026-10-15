import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Skills.css'

const skillGroups = [
  {
    category: 'LANGUAGES',
    skills: [
      { name: 'Python', pct: 92 },
      { name: 'Java',   pct: 75 },
      { name: 'SQL',    pct: 72 },
    ],
  },
  {
    category: 'AI & MACHINE LEARNING',
    skills: [
      { name: 'Deep Learning',           pct: 90 },
      { name: 'Computer Vision',         pct: 88 },
      { name: 'Transfer Learning (CNNs)',pct: 87 },
      { name: 'Sequential Neural Nets',  pct: 85 },
      { name: 'Prompt Engineering',      pct: 82 },
    ],
  },
  {
    category: 'LIBRARIES & FRAMEWORKS',
    skills: [
      { name: 'TensorFlow', pct: 88 },
      { name: 'Keras',      pct: 87 },
      { name: 'OpenCV',     pct: 83 },
      { name: 'MediaPipe',  pct: 82 },
      { name: 'PyTorch',    pct: 80 },
    ],
  },
  {
    category: 'FULL-STACK & INFRASTRUCTURE',
    skills: [
      { name: 'WebSockets',         pct: 78 },
      { name: 'WebRTC / LiveKit',   pct: 76 },
      { name: 'Next.js',            pct: 74 },
      { name: 'PostgreSQL / Prisma',pct: 72 },
    ],
  },
]

const SkillBar = ({ name, pct, inView, delay }) => {
  return (
    <div className="skill-row">
      <div className="skill-meta">
        <span className="skill-name">{name}</span>
        <span className="skill-pct">{pct}%</span>
      </div>
      <div className="skill-track">
        <motion.div
          className="skill-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : { width: 0 }}
          transition={{ duration: 1.1, delay, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>
    </div>
  )
}

const Skills = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const fadeUp = {
    hidden:  { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 60, damping: 14 } },
  }
  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.18 } },
  }

  return (
    <section className="section skills-section" id="skills" ref={ref}>
      <div className="skills-watermark" aria-hidden="true">SKILLS</div>

      <motion.div
        className="section-inner"
        variants={stagger}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.span className="s-label" variants={fadeUp}>— THE ARSENAL</motion.span>
        <motion.h2 className="s-heading" variants={fadeUp}>WHAT I BRING</motion.h2>

        <div className="skills-grid">
          {skillGroups.map((group, gi) => (
            <motion.div key={gi} className="skill-group" variants={fadeUp}>
              <h3 className="skill-category">{group.category}</h3>
              {group.skills.map((s, si) => (
                <SkillBar
                  key={si}
                  name={s.name}
                  pct={s.pct}
                  inView={inView}
                  delay={gi * 0.1 + si * 0.08}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills
