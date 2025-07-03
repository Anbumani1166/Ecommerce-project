// components/Sign.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import NavBar from './NavBar';

function Sign() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if(!email || !password || !cpassword){
      alert("please fill this form")
      return
    }
    if(password!==cpassword){
      alert('password not matched')
      return

    }
    setEmail('')
    setPassword("")
    setCpassword('')
      localStorage.setItem('user', JSON.stringify({ email, password }));
      localStorage.setItem('auth',"true")
      alert("Sign up successful!");
      navigate("/home")
  };

  return (
    <div className="container mt-4">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <div className="mb-3">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          
          />
        </div>
        <div className="mb-3">
          <label>Password:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            
          />
        </div>
        <div className="mb-3">
          <label>Confirm Password:</label>
          <input
            type="password"
            className="form-control"
            value={cpassword}
            onChange={(e) => setCpassword(e.target.value)}
            
          />
        </div>
        <button type="submit" className="btn btn-primary">Sign Up</button>
      </form>

      {/* 👉 Link to Login page */}
      <div className="mt-3">
        Already have an account? <Link to="/login">Login here</Link>
      </div>
    </div>
  );
}

export default Sign;
