import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import NavBar from './components/NavBar'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
  </StrictMode>,
)
