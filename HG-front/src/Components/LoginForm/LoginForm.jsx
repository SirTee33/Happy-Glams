import React, { useState } from 'react';
import './LoginForm.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext';

const LoginForm = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      login({ email }); // ✅ Set isLoggedIn to true in context
      setEmail('');
      setPassword('');
      navigate('/'); // ✅ Redirect to home
    } else {
      setError('Invalid email or password'); // ❌ Show error message
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Welcome Back</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          className="login-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="login-error">{error}</p>}
        <button type="submit" className="login-button">Login</button>
        <p className="login-link-text">
          Don’t have an account? <Link to="/signup" className="login-link">Sign up here</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
