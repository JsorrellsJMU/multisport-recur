// src/pages/AthletesPage.jsx
import React from 'react'
import { Link } from 'react-router-dom'

// Static athlete list for now
const ATHLETES = [
  { id: 1, name: 'Jordan Lee',   sport: 'Track & Field', image: '/athlete1.jpg' },
  { id: 2, name: 'Sasha Ramos',  sport: 'Volleyball',    image: '/athlete2.jpg' },
  { id: 3, name: 'Devin Patel',  sport: 'Tennis',        image: '/athlete3.jpg' },
  { id: 4, name: 'Kai Nakamura', sport: 'Swimming',      image: '/athlete4.jpg' },
]

export default function AthletesPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">All Athletes</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {ATHLETES.map((a) => (
          <div
            key={a.id}
            className="flex flex-col justify-between overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 h-full"
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={a.image}
                alt={a.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 bg-white text-center flex flex-col flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {a.name}
              </h3>
              <p className="text-blue-600 font-medium mb-4">{a.sport}</p>
              <Link
                to="/athletes"
                className="mt-auto inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-5 rounded-full transition-colors duration-200"
              >
                View Athletes
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Future: replace static ATHLETES array with dynamic fetch 
      useEffect(() => {
        fetch('/api/athletes')
          .then(res => res.json())
          .then(data => setAthletes(data))
      }, [])
      */}
    </div>
  )
}