import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu when changing routes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest('.nav-menu') && !event.target.closest('.mobile-toggle')) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/" className="logo">
            <img 
              src="https://www.clipartmax.com/png/middle/184-1848796_ucd-brandmark-colour-university-college-dublin.png" 
              alt="UCD Logo" 
            />
          </Link>
          <h1 className="title">UCD Gym Booking</h1>
        </div>

        <button 
          className="mobile-toggle" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Dropdown menu that appears when the triple line is clicked */}
        <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/book-gym" className="book-gym-btn" onClick={() => setMenuOpen(false)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="4" width="18" height="18" rx="2" stroke="white" strokeWidth="2"/>
                <path d="M16 2V6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <path d="M8 2V6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <path d="M3 10H21" stroke="white" strokeWidth="2"/>
                <path d="M9 14L11 16L15 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Book Gym
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};