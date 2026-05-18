import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <div className="logo">
          <a href="/#home" style={{ textDecoration: 'none' }}>
            <span className="logo-text">CD<span className="text-gradient-green">Cyber</span></span>
          </a>
        </div>
        <div className="nav-links">
          <a href="/#home">Home</a>
          <a href="/#courses">Courses</a>
          <a href="/#about">About</a>
          <a href="/#contact">Contact</a>
        </div>
        <div className="nav-action">
          <a href="https://forms.gle/iw7MrUcLKakPAmjE7" target="_blank" rel="noopener noreferrer" className="btn-outline">
            Enroll Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
