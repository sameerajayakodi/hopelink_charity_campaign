import React from 'react';
import heroImage from '../assets/images/Hero.png';

const Hero = () => {
  return (
    <section className="hero">
      <h1 className="title">Make an impact to the world.</h1>
      <p className="hero-p">We’re offering complete solutions to launch your donation campaigns.</p>
      <div className="cta-buttons">
        <a href="#" className="btn primary">Get Started</a>
        <a href="#" className="btn secondary">Learn More</a>
      </div>
      <img src={heroImage} alt="Donation Illustration" className="hero-image" />
    </section>
  );
};

export default Hero;
