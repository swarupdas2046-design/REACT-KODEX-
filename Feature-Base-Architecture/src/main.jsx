import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppRoutes from './app/routes/AppRoutes.jsx'
import AuthContext from './context/AuthContext.jsx'
import EmployeeContext from './context/EmployeeContext.jsx'

createRoot(document.getElementById('root')).render(
    <AuthContext>
        <EmployeeContext>
        <AppRoutes />
        </EmployeeContext>
    </AuthContext>
)
