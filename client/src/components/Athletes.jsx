// src/components/Athletes.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// Sample data — swap in real athlete info & images later
const ATHLETES = [
  {
    id: 1,
    name: 'Jordan “Flash” Lee',
    sport: 'Track & Field',
    stat: '100m PB: 10.04s',
    image: '/athlete1.jpg',
    profileUrl: '/athletes/1'
  },
  {
    id: 2,
    name: 'Sasha “Spike” Ramos',
    sport: 'Volleyball',
    stat: 'Blocks per set: 1.8',
    image: '/athlete2.jpg',
    profileUrl: '/athletes/2'
  },
  {
    id: 3,
    name: 'Devin “Ace” Patel',
    sport: 'Tennis',
    stat: 'Aces per match: 12',
    image: '/athlete3.jpg',
    profileUrl: '/athletes/3'
  },
  {
    id: 4,
    name: 'Kai “Wave” Nakamura',
    sport: 'Swimming',
    stat: '50m Freestyle: 21.7s',
    image: '/athlete4.jpg',
    profileUrl: '/athletes/4'
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' }
  })
}

export default function Athletes() {
  return (
    <section className="py-16 bg-white text-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Meet Our Athletes</h2>

        {/* Athlete Cards */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {ATHLETES.map((athlete, idx) => (
            <motion.div
              key={athlete.id}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-200 flex flex-col"
            >
              <img
                src={athlete.image}
                alt={athlete.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-1">{athlete.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{athlete.sport}</p>
                <p className="text-gray-700 flex-1 mb-4">{athlete.stat}</p>
                <Link
                  to={`/athletes/${athlete.id}`}
                  className="mt-auto inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded text-center transition-colors duration-200"
                >
                  View Profile
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link
            to="/athletes"
            className="inline-block bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-2 px-6 rounded transition-colors duration-200"
          >
            View All Athletes
          </Link>
        </div>
      </div>
    </section>
  )
}
