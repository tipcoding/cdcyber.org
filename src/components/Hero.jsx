import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-bg-glow"></div>
      <div className="container hero-content">
        <div className="hero-text-content animate-fade-in">
          <div className="terminal-badge">
            <span className="terminal-prompt">&gt;</span> ./init_training.sh
          </div>
          <h1 className="hero-title">
            Master <span className="text-gradient-cyan">Cyber Security</span><br/>
            With Elite Training
          </h1>
          <p className="hero-description">
            CDCyber is your premier destination for hands-on, practical training in OSCP, Penetration Testing, and An Ninh Mang. Elevate your skills to the next level.
          </p>
          <div className="hero-actions">
            <a href="#courses" className="btn-cyber">Explore Courses</a>
            <a href="#about" className="btn-outline">Learn More</a>
          </div>
        </div>
        <div className="hero-visual animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="glass-panel cyber-card">
            <div className="card-header">
              <div className="dots">
                <span></span><span></span><span></span>
              </div>
              <div className="card-title">root@cdcyber:~</div>
            </div>
            <div className="card-body">
              <p><span className="text-green">user@host:~$</span> nmap -sV 10.10.10.1</p>
              <p>Starting Nmap 7.92...</p>
              <p>Host is up (0.0012s latency).</p>
              <p>PORT   STATE SERVICE</p>
              <p>22/tcp open  ssh</p>
              <p>80/tcp open  http</p>
              <p className="blinking-cursor">_</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
