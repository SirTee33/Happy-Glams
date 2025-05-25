import React, { useState, useEffect } from 'react';
import "../Components/Styles/LoginSignup.css";
import { Link, useNavigate } from 'react-router-dom';

const LoginSignup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (!agree) {
      alert("You must agree to the terms.");
      return;
    }
    setLoading(true);

    // Retrieve existing users from localStorage or initialize empty array
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if email already exists
    if (users.find(user => user.email === email)) {
      alert("User with this email already exists.");
      setLoading(false);
      return;
    }

    // Add new user
    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));

    alert("Account created successfully! Please login.");
    setLoading(false);

    // Clear inputs
    setName('');
    setEmail('');
    setPassword('');
    setAgree(false);

    // Redirect to login page
    navigate('/login');
  };

  return (
    <div className='l-signup'>
      <div className="l-signup-container">
        <h1>Join the Glam Fam</h1>
        <form onSubmit={handleSignup}>
          <div className="l-signup-fields">
            <input
              type="text"
              placeholder='Your Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder='Email Address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="l-signup-agree">
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              id="terms"
            />
            <label htmlFor="terms">By continuing, I agree to the terms of use & privacy policy.</label>
          </div>
          <button type="submit">Continue</button>
        </form>
        <p className='l-signup-login'>
          Already have an account? <Link to="/login" className="sign-link">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
