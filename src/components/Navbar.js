// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">Tirek Military</Link>
      <div className="nav-links">
        <Link to="/violence">Violence Detection</Link>
        <Link to="/emotion">Emotion Detection</Link>
        <Link to="/questionnaire">Questionnaire</Link>
      </div>
    </nav>
  );
}

export default Navbar;
