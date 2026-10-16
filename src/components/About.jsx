import React, { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './About.css'

const About = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 60, damping: 14 } },
  }

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.18 } },
  }

  return (
    <section className="section about-section" id="about" ref={ref}>
      {/* Red watermark */}
      <div className="about-watermark" aria-hidden="true">ABOUT</div>

      <motion.div
        className="section-inner"
        variants={stagger}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.span className="s-label" variants={fadeUp}>— The Engineer</motion.span>
        <motion.h2 className="s-heading" variants={fadeUp}>WHO I AM</motion.h2>

        <div className="two-col about-cols">
          <motion.p className="about-body" variants={fadeUp}>
            CS Engineer at SRM Institute of Science & Technology . Models trapped in notebooks don’t solve problems—deployed systems do. I architect end-to-end AI and production software: training Computer Vision and Llama-powered RAG pipelines (PyTorch, TensorFlow, MediaPipe, LangChain, ChromaDB) and shipping them over scalable Python backends, WebSockets, REST APIs, Next.js, PostgreSQL, and Docker.
          </motion.p>
          <motion.p className="about-body" variants={fadeUp}>
            3D gesture inference under 50ms. 97.45% accuracy across 70,295 images. High-precision semantic retrieval at scale. Beyond the code: E2E Cloud AI Speaker, Neuroplex PromptHeist Organizer, and District Bronze Powerlifter. Heavy weights. Low latency. Built to execute under pressure.
          </motion.p>
        </div>

        <motion.div className="about-mission" variants={fadeUp}>
          <blockquote className="mission-text">
            "UNTIL A MODEL SURVIVES PRODUCTION AT SUB-50MS LATENCY, IT'S JUST A THEORY."
          </blockquote>
          <p className="vision-text">
            Where deep learning precision meets hardened full-stack engineering—built for real-world scale.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About
