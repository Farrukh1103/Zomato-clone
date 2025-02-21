export const API_URL = "https://quick-backend-nodejs.onrender.com"

// Authentication endpoints
export const AUTH_ENDPOINTS = {
  LOGIN: `${API_URL}/auth/login`,
  SIGNUP: `${API_URL}/auth/signup`,
  LOGOUT: `${API_URL}/auth/logout`,
  VALIDATE: `${API_URL}/auth/validate`
}

// Helper function for making authenticated requests
export const authRequest = async (url, method = 'GET', body = null) => {
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
  };
  
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(url, {
    method,
    headers,
    body: body ? JSON.stringify(body) : null
  });

  if (!response.ok) {
    throw new Error('Request failed');
  }

  return response.json();
};
