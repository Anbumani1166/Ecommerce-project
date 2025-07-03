// components/Login.jsx
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import NavBar from './NavBar';

function Login() {
  const { user } = useParams(); // Getting :user from URL (if used)
  const navigate = useNavigate();
  const [email, setEmail] = useState(user || '');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Retrieve the user stored during signup
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      localStorage.setItem("auth","true")
      navigate('/home')
    } else {
      alert('Invalid email or password!');
    }
    setEmail('')
    setPassword("")
  };

  return (
    <div className="container mt-4">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Password:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-success">Login</button>
      </form>
    </div>
  );
}

export default Login;
