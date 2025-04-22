import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <main className="pt-20">
      <Hero />
      {/* Add other components here */}
    </main>
  </StrictMode>,
)
