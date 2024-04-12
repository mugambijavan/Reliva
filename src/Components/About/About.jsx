import React from 'react';
import './About.css';
import reliva from '../../assets/about.jpg';

const About = () => {
  return (
    <div  className="about">
      <div className="about-left">
     <img src={reliva} alt=""  className='about-img'/>
     </div>
      <div className="about-right">
      <h3>ABOUT US</h3>
      <h2>Relieve Your Pain, Restore Your Life</h2>
      <p>At Reliva, we believe in movement. It's the essence of a healthy life, and when pain disrupts that movement, it disrupts your well-being. That's where we come in. Our team of passionate physiotherapists and chiropractors combines their expertise to offer a holistic approach to pain management. We don't just treat symptoms; we address the root cause of your discomfort, empowering you to move freely and live life to the fullest.</p>
      
      </div>
    </div>
  );
}

export default About;
