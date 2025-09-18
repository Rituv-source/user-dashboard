import { useState } from 'react'
import { useApp } from '../context/AppContext.jsx'

const roles = ['Admin', 'Editor', 'Viewer']

export default function UserForm({ onAdded }) {
  const { addUser, resetPage } = useApp()
  const [form, setForm] = useState({ name: '', email: '', role: 'Viewer' })

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim()) return
    addUser({ ...form })
    resetPage()
    onAdded?.()
    setForm({ name: '', email: '', role: 'Viewer' })
  }

  return (
    <form onSubmit={onSubmit} className="grid cols-2">
      <div className="stack">
        <label>Name</label>
        <input name="name" placeholder="Jane Doe" value={form.name} onChange={update} />
      </div>
      <div className="stack">
        <label>Email</label>
        <input name="email" type="email" placeholder="jane@demo.com" value={form.email} onChange={update} />
      </div>
      <div className="stack">
        <label>Role</label>
        <select name="role" value={form.role} onChange={update}>
          {roles.map(r => <option key={r} value={r}>{r}</option>)}
        </select>
      </div>
      <div className="stack" style={{ alignSelf: 'end' }}>
        <button className="btn" type="submit">Add user</button>
      </div>
    </form>
  )
}