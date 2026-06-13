import React, { useState, useEffect } from 'react';
import './Hero.css';

const Counter = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <span className="stat-number">{count.toLocaleString()}</span>;
};

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className={`hero ${isVisible ? 'visible' : ''}`}>
      <div className="hero-content">
        <h1 className="hero-title">Discover Stories That Touch The Heart</h1>
        <p className="hero-subtitle">Premium Editorial Content Crafted with Passion</p>
        
        <div className="hero-stats">
          <div className="stat-item">
            <Counter target={5000} duration={2500} />
            <p className="stat-label">Readers Worldwide</p>
          </div>
          <div className="stat-item">
            <Counter target={150} duration={2500} />
            <p className="stat-label">Stories Published</p>
          </div>
          <div className="stat-item">
            <Counter target={98} duration={2500} />
            <p className="stat-label">% Satisfaction Rate</p>
          </div>
        </div>

        <div className="hero-cta">
          <button className="btn-primary">Start Reading</button>
          <button className="btn-secondary">Learn More</button>
        </div>
      </div>

      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
    </section>
  );
};

export default Hero;
