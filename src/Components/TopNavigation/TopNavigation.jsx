import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase'; // make sure this path is correct
import { signOut } from 'firebase/auth';
import './TopNavigation.css';

const Navbar = () => {
  const navigate = useNavigate();

  // Function to handle logging out
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/LoginSignup'); // or wherever you want to redirect after logging out
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <nav className="navbar">
      <Link to="/dashboard" className="nav-item">Home Page</Link>
      <Link to="/Games" className="nav-item">Games</Link> 
      <Link to="/Account" className="nav-item">Account page</Link>
      {/* Logout Button */}
      <button onClick={handleLogout} className="nav-item logout-button">Log Out</button>
    </nav>
  );
};

export default Navbar;