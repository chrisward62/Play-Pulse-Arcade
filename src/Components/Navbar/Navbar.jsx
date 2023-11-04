import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/dashboard" className="nav-item">Dashboard</Link>
      <Link to="/option1" className="nav-item">Option 1</Link>
      <Link to="/option2" className="nav-item">Option 2</Link>
    </nav>
  );
};

export default Navbar;
