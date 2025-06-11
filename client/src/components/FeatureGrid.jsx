// src/components/FeaturedGrid.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const PRODUCTS = [
  { id: 1, title: 'Performance Tee',  price: '$29.99', image: '/placeholder1.jpg', url: '/shop' },
  { id: 2, title: 'Athlete Hoodie',   price: '$49.99', image: '/placeholder2.jpg', url: '/shop' },
  { id: 3, title: 'Trading Card',     price: '$9.99',  image: '/placeholder3.jpg', url: '/shop' },
  { id: 4, title: 'Snapback Hat',     price: '$24.99', image: '/placeholder4.jpg', url: '/shop' },
]

const ATHLETES = [
  { id: 1, name: 'Jordan Lee',   sport: 'Track & Field', image: '/athlete1.jpg' },
  { id: 2, name: 'Sasha Ramos',  sport: 'Volleyball',    image: '/athlete2.jpg' },
  { id: 3, name: 'Devin Patel',  sport: 'Tennis',        image: '/athlete3.jpg' },
  { id: 4, name: 'Kai Nakamura', sport: 'Swimming',      image: '/athlete4.jpg' },
]

const cardAnim = {
  hidden: { opacity: 0, y: 20 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, ease: 'easeOut', duration: 0.6 }
  })
}

export default function FeaturedGrid() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-zinc-100">
      <div className="container mx-auto px-4">
        <div className="grid gap-16 grid-cols-1 md:grid-cols-2">
          
          {/* PRODUCTS COLUMN */}
          <div>
            <h3 className="text-4xl font-extrabold mb-8 text-gray-900 text-center">
              Shop Our Gear
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 auto-rows-fr gap-8">
              {PRODUCTS.map((p, i) => (
                <motion.div
                  key={p.id}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={cardAnim}
                  className="h-full flex flex-col justify-between overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2"
                >
                  <div className="relative h-56 md:h-64 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/25"></div>
                  </div>
                  <div className="p-6 bg-white flex flex-col items-center text-center">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {p.title}
                    </h4>
                    <p className="text-blue-600 font-bold mb-4">{p.price}</p>
                    <Link
                      to={p.url}
                      className="mt-auto bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-5 rounded-full transition-colors duration-200"
                    >
                      Shop Now
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ATHLETES COLUMN */}
          <div>
            <h3 className="text-4xl font-extrabold mb-8 text-gray-900 text-center">
              Meet Our Athletes
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 auto-rows-fr gap-8">
              {ATHLETES.map((a, i) => (
                <motion.div
                  key={a.id}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={cardAnim}
                  className="h-full flex flex-col justify-between overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2"
                >
                  <div className="relative h-56 md:h-64 overflow-hidden">
                    <img
                      src={a.image}
                      alt={a.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/25"></div>
                  </div>
                  <div className="p-6 bg-white flex flex-col items-center text-center">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {a.name}
                    </h4>
                    <p className="text-blue-600 font-medium mb-4">{a.sport}</p>
                    {/* Link to your single Athletes page */}
                    <Link
                      to="/athletes"
                      className="mt-auto bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-5 rounded-full transition-colors duration-200"
                    >
                      View Athletes
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
