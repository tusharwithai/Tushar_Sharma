import React, { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './About.css'

const About = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const fadeUp = {
    hidden:  { opacity: 0, y: 60 },
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
            I'm a final-year Computer Science Engineering student at SRM IST Ghaziabad,
            specializing in Artificial Intelligence, Machine Learning, and Computer Vision.
            My work lives at the intersection of research and real deployment — I don't just
            train models, I ship them. I work with Python, TensorFlow, Keras, PyTorch, OpenCV,
            and MediaPipe to build systems that actually run in the world.
          </motion.p>
          <motion.p className="about-body" variants={fadeUp}>
            From WebSocket inference servers clocking under 50ms latency to MobileNetV2 pipelines
            fine-tuned on over 70,000 images — I bring both scientific precision and engineering
            discipline to every project. I've spoken at E2E Cloud as a guest AI presenter, organized
            PromptHeist at Neuroplex, and competed as a Bronze Medalist powerlifter. I show up,
            I deliver, and I do it under pressure.
          </motion.p>
        </div>

        <motion.div className="about-mission" variants={fadeUp}>
          <blockquote className="mission-text">
            "TO ENGINEER INTELLIGENT SYSTEMS THAT SOLVE REAL HUMAN PROBLEMS —<br />
            MAKING AI ACCESSIBLE, IMPACTFUL, AND INCLUSIVE."
          </blockquote>
          <p className="vision-text">
            A future where cutting-edge deep learning research meets scalable real-world applications
            — and where technology empowers every person equally.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About
