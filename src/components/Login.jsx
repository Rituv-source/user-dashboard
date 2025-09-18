import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()

  const onSubmit = (e) => {
    e.preventDefault()
    navigate('/dashboard')
  }

  return (
    <div className="container">
      <div className="card" style={{ maxWidth: 420, margin: '10vh auto' }}>
        <div className="stack">
          <h2>Welcome back</h2>
          <form onSubmit={onSubmit} className="stack">
            <div className="stack">
              <label>Email</label>
              <input type="email" placeholder="you@example.com" required />
            </div>
            <div className="stack">
              <label>Password</label>
              <input type="password" placeholder="••••••••" required />
            </div>
            <button className="btn" type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}