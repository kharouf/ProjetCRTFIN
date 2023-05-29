
import React from 'react';

import { Fade, Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
// import image1 from '../assets/images/new-lod.gif'
import image1 from '../assets/images/slide7.jpg'
import image2 from '../assets/images/slide2.jpg'
import image3 from '../assets/images/slide3.JPG'
import image4 from '../assets/images/slide4.JPG'




const fadeImages = [
  {
url: image1,
    
  },
  {
url: image2,
    
  },
  {
url:image3   
  },
  {
  url:image4   
  },
];

const Carousel = () => {
  const zoomOutProperties = {
    duration: 5000,
    transitionDuration: 100,
    infinite: true,
    autoplay: true,
    indicators: true,
    scale: 0.2,
    arrows: true
  };
  return (
    <div className="slide-container">
      <Zoom className='zoom-carousel' {...zoomOutProperties}>
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <img style={{ width: '100%' ,height:'100vh'}} src={fadeImage.url} />
            
          </div>
        ))}
      </Zoom>
    </div>
  )
}

export default Carousel