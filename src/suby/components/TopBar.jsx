import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Auth.css'


const TopBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
    window.location.reload();
  };

  const isLoggedIn = !!localStorage.getItem('token');

  return (
   <section className="topBarSection">
        <div className="companyTitle">
            <Link to='/' className='link'>
            <h2>QUICK</h2>
            </Link>
        </div>
        <div className="searchBar">
            <input type="text" placeholder='Search...' />
        </div>
        <div className="userAuth">
          {isLoggedIn ? (
            <button onClick={handleLogout} className="auth-button">
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="auth-button">
                Login
              </Link>
              <span className="auth-separator">/</span>
              <Link to="/signup" className="auth-button">
                Sign Up
              </Link>
            </>
          )}
        </div>
   </section>
  )
}


export default TopBar
