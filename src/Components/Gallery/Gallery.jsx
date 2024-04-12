import React from 'react';
import './Gallery.css';
import reliva from '../../assets/reliva.jpg';






const Gallery = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={reliva} alt="" /> 
        <img src={reliva} alt="" />  
        <img src={reliva} alt="" />  
        <img src={reliva} alt="" />  

      </div>
    </div>
  );
}

export default Gallery;
