import React from 'react';
import AuthForm from '../components/AuthForm';
import { AUTH_ENDPOINTS, authRequest } from '../api';

const LoginPage = () => {
  const handleLogin = async (formData) => {
    const response = await authRequest(AUTH_ENDPOINTS.LOGIN, 'POST', formData);
    localStorage.setItem('token', response.token);
  };

  return (
    <div className="login-page">
      <AuthForm type="login" onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
