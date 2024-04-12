import React, { useRef } from 'react';
import './Testimonials.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';

const Testimonials = () => {
    const slider = useRef();
    let tx = 0;
const slideForward = ()=>{
    if (tx > -50) {
        tx -= 25;
}
slider.current.style.transform = `translateX(${tx}%)`;
}
const  slideBackwards=()=>{
  if(tx < 0){
   tx += 25;
  }
  slider.current.style.transform = `translateX(${tx}%)`;

}
return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackwards} />
        <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                        
                        </div>
                    </div>
                    <p>
                    "After struggling with knee pain for months, Reliva's physiotherapy program helped me regain my strength and flexibility. I can finally hike again pain-free!"
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                           
                        </div>
                    </div>
                    <p>
                    "Dr. Patel's chiropractic adjustments were a game-changer for my chronic back pain. I feel more mobile and have a newfound appreciation for pain-free movement.
                    </p>
                </div>
            </li><li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            
                        </div>
                    </div>
                    <p>
                    "Reliva's corporate wellness program has significantly reduced work-related injuries in our office. Our employees are happier and more productive thanks to their proactive approach.
                    </p>
                </div>
            </li>
        </ul>
        </div>
    </div>
  );
}

export default Testimonials;
