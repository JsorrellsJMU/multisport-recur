// src/main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar         from './components/NavBar'
import Hero           from './components/Hero'
import About          from './components/About'
import ShopPreview    from './components/ShopPreview'
import Athletes       from './components/Athletes'
import AthletesPage   from './pages/AthletePage'
import AthleteProfile from './pages/AthleteProfile'

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
                <ShopPreview />
                <Athletes />
              </>
            }
          />
          <Route path="/athletes" element={<AthletesPage />} />
          <Route path="/athletes/:id" element={<AthleteProfile />} />
        </Routes>
      </main>
    </BrowserRouter>
  </StrictMode>
)
