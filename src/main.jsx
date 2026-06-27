import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthContext from './context/AuthProvider'
import { setLocalStorage } from './utils/localStorage.jsx'
setLocalStorage()

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <AuthContext>
        <App />
    </AuthContext>
  </StrictMode>
)
