// import React from "react";
// import './index.css';
// import MainSearchBar from "../../utils/mainSearchBar";

// export default function MainSlider() {
//     return(
//         <div className="mainSlider" >
//             <MainSearchBar/>
//         </div>
//     )
// }





import React, { useState,useEffect } from 'react';
import './index.css'
import MainSearchBar from "../../utils/mainSearchBar";
import arrowLeft from "../../assets/arrow left.png"
import arrowRight from "../../assets/arrow right.png"

const MainSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

    useEffect(() => {
    setInterval(() => {
        nextSlide()
    }, 10000);
  }, []);
  return (
    <section className='slider'>
      <div className='left-arrow' onClick={prevSlide} > <img src={arrowLeft} alt="" srcset="" /> </div>
      <div className='right-arrow' onClick={nextSlide}>  <img src={arrowRight} alt="" srcset="" /></div>
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travel image' className='image' />
            )}
          </div>
        );
      })}
      <MainSearchBar/>
    </section>
  );
};

export default MainSlider;
