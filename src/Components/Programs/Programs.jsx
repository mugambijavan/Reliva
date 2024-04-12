import React from 'react';
import './Programs.css';
import image2 from  "../../assets/image2.jpg";






const Programs = () => {
  return (
    <div className='programs'>
        <div className="program">
            <img src={image2} alt="" />
            <div className="caption">
              <p>Integrated Treatment Plans</p>
              <p>We combine physiotherapy and chiropractic care to create a customized plan that addresses your specific needs</p>
            </div>
            </div>
            <div className="program">
            <img src={image2} alt="" />
            <div className="caption">
              <p>Advanced Technology</p>
              <p>We utilize the latest tools and techniques, including ultrasound and spinal decompression therapy, to accelerate your healing journey.</p>
              </div>
            </div>
            <div className="program">
            <img src={image2} alt="" />
            <div className="caption">
              <p>Movement Lab</p>
              <p>Our on-site movement lab allows us to analyze your movement patterns and design targeted exercises for optimal results.</p>
            </div>
            </div>
    </div>
  );
}

export default Programs;
