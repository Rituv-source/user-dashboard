import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const update = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password) return;
    navigate("/dashboard"); 
  };

  return (
    <form onSubmit={onSubmit} className="login-card stack">
      <h2>Welcome back</h2>

      <label>Email</label>
      <input
        name="email"
        type="email"
        placeholder="you@example.com"
        value={form.email}
        onChange={update}
      />

      <label>Password</label>
      <input
        name="password"
        type="password"
        placeholder="********"
        value={form.password}
        onChange={update}
      />

      <button className="btn" type="submit">Login</button>

      <div className="login-footer">
        <a href="#" className="forgot">Forgot password?</a>
        <p className="note">Use any email and password to continue</p>
      </div>
    </form>
  );
}