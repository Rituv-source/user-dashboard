import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/Login.jsx'
import Dashboard from './components/Dashboard.jsx'
import { AppProvider, useApp } from './context/AppContext.jsx'

function ThemedApp() {
  const { theme } = useApp()
  return (
    <div data-theme={theme}>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  )
}
export default ThemedApp
