import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import ShopPreview from './components/shopPreview'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <main className="pt-20">
      <Hero />
      {/* Add other components here */}
      <About />
      <ShopPreview />
    </main>
  </StrictMode>,
)
