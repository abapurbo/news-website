import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainLaout from './MainLayout/MainLaout'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainLaout></MainLaout>
  </StrictMode>,
)
