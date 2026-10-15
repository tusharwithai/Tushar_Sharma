import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Projects.css'

const projects = [
  {
    label: '— COMPUTER VISION · WEBRTC · FEB–APR 2026',
    heading: 'PLEXMEET',
    sub: 'AI-Powered Accessible Video Conferencing',
    desc: 'A full-stack WebRTC video conferencing platform with real-time American Sign Language (ASL) translation powered by AI. A Python WebSocket inference server runs gesture recognition at under 50ms latency using MediaPipe 3D hand tracking. Gestures are classified live using a Sequential model built in Keras — making video communication genuinely accessible to the hearing-impaired.',
    stat: '< 50ms LATENCY   ·   REAL-TIME ASL TRANSLATION',
    outcomes: [
      'Built WebSocket server in Python capable of recognizing 3D hand gestures with <50ms latency',
      'Classified ASL gestures in real time via a Sequential model implemented in Keras',
      'Integrated MediaPipe hand tracking with a Next.js + LiveKit WebRTC frontend',
      'Delivered end-to-end accessibility from ML model to production video interface',
      'Used PostgreSQL + Prisma for persistent session and user data',
    ],
    stack: ['PYTHON', 'TENSORFLOW', 'KERAS', 'MEDIAPIPE', 'NEXT.JS', 'WEBRTC (LIVEKIT)', 'POSTGRESQL', 'PRISMA', 'WEBSOCKETS', 'COMPUTER VISION'],
    index: '01',
  },
  {
    label: '— DEEP LEARNING · TRANSFER LEARNING · OCT–NOV 2025',
    heading: 'CROP DISEASE PREDICTOR',
    sub: 'Transfer Learning with MobileNetV2',
    desc: 'A deep learning pipeline trained on 70,295 plant disease images from the New Plant Disease Dataset. Classifies 38 distinct disease categories from leaf photographs. Fine-tuned MobileNetV2 with geometric data augmentation and dropout regularization — achieving 97.45% validation accuracy. Precision agriculture, made real.',
    stat: '97.45% ACCURACY   ·   70,295 IMAGES   ·   38 DISEASE CLASSES',
    outcomes: [
      'Achieved 97.45% validation accuracy on the New Plant Disease Dataset',
      'Classified 38 plant disease types from a 70,295-image training corpus',
      'Applied geometric data augmentation to improve model generalization',
      'Fine-tuned MobileNetV2 architecture using dropout regularization',
      'Built and documented the full pipeline on Google Colab for reproducibility',
    ],
    stack: ['PYTHON', 'TENSORFLOW', 'KERAS', 'MOBILENETV2', 'TRANSFER LEARNING', 'NUMPY', 'MATPLOTLIB', 'COMPUTER VISION', 'DEEP LEARNING'],
    index: '02',
  },
]

const ProjectCard = ({ project, inView, i }) => {
  const fadeUp = {
    hidden:  { opacity: 0, y: 80 },
    visible: {
      opacity: 1, y: 0,
      transition: { type: 'spring', stiffness: 55, damping: 13, delay: i * 0.15 },
    },
  }

  return (
    <motion.article className="project-card" variants={fadeUp}>
      <div className="project-number" aria-hidden="true">{project.index}</div>
      <div className="project-body">
        <span className="project-label s-label">{project.label}</span>
        <h3 className="project-heading">{project.heading}</h3>
        <p className="project-sub">{project.sub}</p>
        <p className="project-desc">{project.desc}</p>
        <div className="project-stat">{project.stat}</div>
        <ul className="project-outcomes">
          {project.outcomes.map((o, idx) => (
            <li key={idx}>{o}</li>
          ))}
        </ul>
        <div className="project-stack">
          {project.stack.map((t, idx) => (
            <span key={idx} className="stack-chip">{t}</span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

const Projects = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  }
  const fadeUp = {
    hidden:  { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 60, damping: 14 } },
  }

  return (
    <section className="section projects-section" id="projects" ref={ref}>
      <div className="projects-watermark" aria-hidden="true">WORK</div>

      <motion.div
        className="section-inner"
        variants={stagger}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.span className="s-label" variants={fadeUp}>— THE WORK</motion.span>
        <motion.h2 className="s-heading" variants={fadeUp}>PROJECTS</motion.h2>

        <div className="projects-list">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} inView={inView} i={i} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects
