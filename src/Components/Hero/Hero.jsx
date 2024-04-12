import React from 'react';
import './Hero.css';
import dark_arrow from '../../assets/dark-arrow.png';
function Hero() {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Reliva Physiotherapy and Chiropractic Centre: </h1>
        <p>Reclaim Your Rhythm</p>
        <p>Rediscover Movement</p>
        <p>Relive Your Life</p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="shiva" /></button>
      </div>
    </div>
  );
}

export default Hero;
