// src/components/ShopPreview.jsx
import React from 'react'

const PRODUCTS = [
  { id: 1, title: 'Recur Performance Tee', price: '$29.99', description: 'Lightweight, moisture-wicking training shirt.', image: '/placeholder1.jpg' },
  { id: 2, title: 'Champion Athlete Hoodie', price: '$49.99', description: 'Cozy hoodie with signature Recur logo.', image: '/placeholder2.jpg' },
  { id: 3, title: 'Limited-Edition Trading Card', price: '$9.99', description: 'Collectible card featuring pro athlete stats.', image: '/placeholder3.jpg' },
  { id: 4, title: 'Recur Snapback Hat', price: '$24.99', description: 'Adjustable hat with sleek embroidered logo.', image: '/placeholder4.jpg' },
]

export default function ShopPreview() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-200 overflow-hidden flex flex-col"
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold mb-1">{p.title}</h3>
                <p className="text-blue-600 font-bold mb-2">{p.price}</p>
                <p className="text-gray-600 flex-1">{p.description}</p>
                {/* Use anchor for now */}
                <a
                  href={`/shop/${p.id}`}
                  className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded text-center transition-colors duration-200"
                >
                  View Product
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href="/shop"
            className="inline-block bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-2 px-6 rounded transition-colors duration-200"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  )
}
