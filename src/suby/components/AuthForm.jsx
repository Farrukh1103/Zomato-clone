import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';


const AuthForm = ({ type, onSubmit }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    ...(type === 'signup' && { name: '' })
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onSubmit(formData);
      navigate('/');
    } catch (err) {
      setError(err.message || 'Authentication failed');
    }
  };

  return (
    <div className="auth-form">
      <h2>{type === 'login' ? 'Login' : 'Sign Up'}</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        {type === 'signup' && (
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        )}
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">
          {type === 'login' ? 'Login' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
