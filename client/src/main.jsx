// src/main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar         from './components/NavBar'
import Hero           from './components/Hero'
import About          from './components/About'
import AthletesPage   from './pages/AthletePage'
import FeaturedGrid from './components/FeatureGrid'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar />
      <main className="pt-20">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <FeaturedGrid />
              </>
            }
          />
          <Route path="/athletes" element={<AthletesPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  </StrictMode>
)
