import React from 'react'
import Athletes from '../components/Athletes'

export default function AthletesPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">All Athletes</h1>
      <Athletes />
    </div>
  )
}
