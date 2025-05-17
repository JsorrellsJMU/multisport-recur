// src/components/About.jsx
import React from 'react'
import { motion } from 'framer-motion'
import training from '../assets/training_ai.png'

const textVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: 'easeOut' },
  }),
}

const imgVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.5, duration: 0.8, ease: 'easeOut' },
  },
}

const About = () => (
  <section className="py-16 bg-white text-gray-900 overflow-hidden">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">
      {/* Text Column */}
      <motion.div
        className="space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={1}
        variants={textVariant}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold"
          custom={2}
          variants={textVariant}
        >
          Our Purpose
        </motion.h2>
        <motion.p className="leading-relaxed" custom={3} variants={textVariant}>
          At Multi Sport Recur, we’re on a mission to fuel the next generation of athletes. From their first
          step on a field to the podium, every young competitor deserves top-tier gear, insights, and support.
        </motion.p>
        <motion.p className="leading-relaxed" custom={4} variants={textVariant}>
          That’s why our AI-driven platform showcases athlete-curated merch, limited-edition trading cards,
          and delivers personalized training tips based on real-time performance data.
        </motion.p>
        <motion.a
          href="#shop"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-5 rounded transform hover:scale-105 transition"
          custom={5}
          variants={textVariant}
        >
          Explore Our Story
        </motion.a>
      </motion.div>

      {/* Image Column */}
      <motion.div
        className="w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={imgVariant}
      >
        <img
          src={training}
          alt="AI-driven training visualization"
          className="w-full rounded-lg shadow-lg object-cover"
        />
      </motion.div>
    </div>
  </section>
)

export default About
