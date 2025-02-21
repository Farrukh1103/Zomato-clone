import React from 'react';
import AuthForm from '../components/AuthForm';
import { AUTH_ENDPOINTS, authRequest } from '../api';

const SignupPage = () => {
  const handleSignup = async (formData) => {
    const response = await authRequest(AUTH_ENDPOINTS.SIGNUP, 'POST', formData);
    localStorage.setItem('token', response.token);
  };

  return (
    <div className="signup-page">
      <AuthForm type="signup" onSubmit={handleSignup} />
    </div>
  );
};

export default SignupPage;
