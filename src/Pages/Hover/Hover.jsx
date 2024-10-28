import React, { useState } from 'react';
import './Hover.css';
import Cds from '/assets/images/csd.png'
const ImageBox = () => {
  const [hover, setHover] = useState(false);

  return (
    <div 
      className="image-box" 
      onMouseEnter={() => setHover(true)} 
      onMouseLeave={() => setHover(false)}
    >
      <div className="image-container">
        <img 
          src={Cds} 
          alt="" 
          className={hover ? 'shrink' : ''}
        />
        <h2 className={hover ? 'shrink' : ''}>Customized SaaS Development</h2>
      </div>
      <div className="content">
        <p>This is some content below the image.</p>
      </div>
    </div>
  );
};

export default ImageBox;
