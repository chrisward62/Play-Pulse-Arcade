import React from 'react';
import { Link } from 'react-router-dom';
import './TopNavigation.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/dashboard" className="nav-item">Home Page</Link>
      <Link to="/Games" className="nav-item">Games</Link> 
      <Link to="/Account" className="nav-item">Account page</Link>
    </nav>
  );
};

export default Navbar;
