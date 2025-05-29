import React from 'react'
import { useParams } from 'react-router-dom'

// same data array (or import it)
const ATHLETES = [ /* … */ ]

export default function AthleteProfile() {
  const { id } = useParams()
  const athlete = ATHLETES.find(a => a.id === Number(id))

  if (!athlete) return <p className="p-8 text-center">Athlete not found.</p>

  return (
    <section className="container mx-auto py-16 px-4">
      <div className="md:flex md:space-x-8">
        <img
          src={athlete.image}
          alt={athlete.name}
          className="w-full md:w-1/3 rounded-lg shadow-lg object-cover mb-6 md:mb-0"
        />
        <div className="md:flex-1">
          <h2 className="text-3xl font-bold mb-4">{athlete.name}</h2>
          <p className="text-blue-600 font-medium mb-2">{athlete.sport}</p>
          <p className="text-gray-700 mb-4">{athlete.stat}</p>
          <p className="mb-4">
            {/* filler bio */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec 
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
            Add a Card
          </button>
        </div>
      </div>
    </section>
  )
}
