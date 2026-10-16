import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Skills.css'

/* Core tools get a subtle left red accent border */
const CORE_TOOLS = new Set([
  'Python', 'PyTorch', 'TensorFlow', 'LangChain', 'FastAPI', 'Docker',
])

const skillGroups = [
  {
    category: 'AI, DEEP LEARNING & GENAI',
    skills: [
      'Deep Learning',
      'Computer Vision',
      'CNNs & Transfer Learning',
      'Sequential Neural Networks',
      'RAG Pipelines',
      'Semantic Search',
      'Document Retrieval Pipelines',
      'Model Evaluation',
    ],
  },
  {
    category: 'ML & DATA FRAMEWORKS',
    skills: [
      'PyTorch',
      'TensorFlow',
      'Keras',
      'scikit-learn',
      'OpenCV',
      'MediaPipe',
      'LangChain',
      'ChromaDB',
      'Hugging Face Sentence-Transformers',
      'Llama',
      'NumPy',
      'pandas',
      'Matplotlib',
    ],
  },
  {
    category: 'BACKEND & PRODUCTION SYSTEMS',
    skills: [
      'Python',
      'FastAPI',
      'REST APIs',
      'WebSockets',
      'SQL',
      'PostgreSQL',
      'Next.js',
    ],
  },
  {
    category: 'DEVOPS, INFRASTRUCTURE & TOOLS',
    skills: [
      'Docker',
      'Git',
      'GitHub',
      'Linux / Bash',
      'Google Colab',
      'Model Deployment',
    ],
  },
]

const Skills = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
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
            <motion.div key={gi} className="skill-card" variants={fadeUp}>
              <div className="skill-card-header">
                <span className="skill-status-dot" aria-hidden="true" />
                <h3 className="skill-category">{group.category}</h3>
              </div>
              <div className="skill-pills">
                {group.skills.map((name, si) => (
                  <span
                    key={si}
                    className={`skill-pill${CORE_TOOLS.has(name) ? ' skill-pill--core' : ''}`}
                  >
                    {name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills
