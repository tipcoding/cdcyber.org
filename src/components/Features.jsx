import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section id="about" className="section-padding features-section">
      <div className="container">
        <div className="features-content">
          <div className="features-text">
            <h2 className="section-title" style={{ textAlign: 'left' }}>
              Why Choose <span className="text-gradient-cyan">CDCyber?</span>
            </h2>
            <p className="features-description">
              We don't just teach theory; we forge cyber operators. Our platform simulates real-world corporate networks, active directory environments, and custom vulnerabilities to prepare you for the challenges you will actually face.
            </p>
            <ul className="features-list">
              <li>
                <span className="feature-icon">⚡</span>
                <div>
                  <h4>Real-World Scenarios</h4>
                  <p>Practice on fully patched, modern systems with realistic attack vectors.</p>
                </div>
              </li>
              <li>
                <span className="feature-icon">🧠</span>
                <div>
                  <h4>Expert Instructors</h4>
                  <p>Learn from industry veterans who hold OSCP, OSEP, and OSWE certifications.</p>
                </div>
              </li>
              <li>
                <span className="feature-icon">🏆</span>
                <div>
                  <h4>Certification Focused</h4>
                  <p>Curriculum specifically mapped to major certifications like OSCP.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="features-visual">
            <div className="hologram-wrapper">
              <div className="hologram-base"></div>
              <div className="hologram-shield">
                <svg viewBox="0 0 100 120" className="shield-svg">
                  <path d="M50 5 L90 20 L90 60 C90 90 50 115 50 115 C50 115 10 90 10 60 L10 20 Z" fill="none" stroke="var(--accent-cyan)" strokeWidth="2" />
                  <path d="M50 25 L75 35 L75 65 C75 85 50 100 50 100 C50 100 25 85 25 65 L25 35 Z" fill="none" stroke="var(--accent-green)" strokeWidth="1" strokeDasharray="4 4"/>
                  <circle cx="50" cy="60" r="10" fill="var(--accent-green)" opacity="0.8">
                    <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
                  </circle>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
