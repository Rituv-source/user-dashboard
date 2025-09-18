import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'
import ThemeToggle from './ThemeToggle.jsx'
import SearchBar from './SearchBar.jsx'
import UserForm from './UserForm.jsx'
import UserList from './UserList.jsx'

export default function Dashboard() {
  const navigate = useNavigate()
  const { resetPage } = useApp()
  const [showForm, setShowForm] = useState(false)

  useEffect(() => resetPage(), [])

  return (
    <div className="container">
      <div className="toolbar">
        <h2 style={{ margin: 0 }}>User Dashboard</h2>
        <div className="row">
          <ThemeToggle />
          <button className="btn ghost" onClick={() => navigate('/login')}>🔓 Logout</button>
        </div>
      </div>

      <div className="card" style={{ marginTop: 16 }}>
        <div className="toolbar">
          <SearchBar />
          <button className="btn" onClick={() => setShowForm(v => !v)}>
            {showForm ? 'Close' : 'Add user'}
          </button>
        </div>

        {showForm && (
          <div style={{ marginTop: 12 }}>
            <UserForm onAdded={() => setShowForm(false)} />
          </div>
        )}

        <div style={{ marginTop: 12 }}>
          <UserList />
        </div>
      </div>
    </div>
  )
}