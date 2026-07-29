import React from 'react';

export default function Hero({ heroHeading }) {
  return (
    <div className="hero-section">
      <h1 className="hero-title">
        {heroHeading || 'Essays about AI, software, learning, and building things from scratch.'}
      </h1>
      <div className="thin-divider" />
    </div>
  );
}
