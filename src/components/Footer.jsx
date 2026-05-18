import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-content">
        <div className="footer-brand">
          <div className="logo-text">CD<span className="text-gradient-green">Cyber</span></div>
          <p className="footer-desc">
            Empowering the next generation of cyber security professionals with elite, hands-on training.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i> 𝕏</a>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i> in</a>
            <a href="#" aria-label="GitHub"><i className="fab fa-github"></i> gh</a>
          </div>
        </div>
        
        <div className="footer-links">
          <div className="link-group">
            <h4>Training</h4>
            <a href="/#oscp">OSCP Prep</a>
            <a href="/#pentest">Pentest Track</a>
            <a href="/#anninhmang">An Ninh Mang</a>
            <a href="/#custom">Corporate</a>
          </div>
          <div className="link-group">
            <h4>Company</h4>
            <a href="/#about">About Us</a>
            <a href="/#instructors">Instructors</a>
            <a href="/#careers">Careers</a>
            <a href="/#contact">Contact</a>
          </div>
          <div className="link-group">
            <h4>Legal</h4>
            <a href="/#terms">Terms of Service</a>
            <a href="/#privacy">Privacy Policy</a>
            <a href="/#cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} CDCyber.org. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
