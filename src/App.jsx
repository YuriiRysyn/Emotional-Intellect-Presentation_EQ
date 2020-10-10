import React, { useState } from 'react';

import { Slide1 } from './components/slide1/Slide1';
import { Slide2 } from './components/Slide2/Slide2';
import { Slide3 } from './components/Slide3/Slide3';

import classNames from 'classnames/bind';

import './App.scss'

const App = () => {
  const [selectedSlide, setSelectedSlide] = useState(1);

  document.addEventListener("keyup", event => {
    if ( event.keyCode === 39) {
      if (selectedSlide === 3) {
        setSelectedSlide(1)
        return;
      };

      setSelectedSlide(selectedSlide + 1)
    }

    if ( event.keyCode === 37) {
      if (selectedSlide === 1) {
        setSelectedSlide(3)
        return;
      };

      setSelectedSlide(selectedSlide - 1)
    }
    
  });
  return (
    <div className="slides">
      <div 
        className= {classNames(
          "slides-wrapper",
        { "slides-wrapper--active1": selectedSlide === 1 },
        { "slides-wrapper--active2": selectedSlide === 2 },
        { "slides-wrapper--active3": selectedSlide === 3 },
        )} 
       >
         <div className="slide1-wrapper">
          <Slide1 selectedSlide={selectedSlide} setSelectedSlide={setSelectedSlide}/>
         </div>
         <div className="slide2-wrapper">
           <Slide2 selectedSlide={selectedSlide} setSelectedSlide={setSelectedSlide}/>
         </div>
         <div className="slide3-wrapper">
          <Slide3 selectedSlide={selectedSlide} setSelectedSlide={setSelectedSlide}/>
         </div>
        </div>
    </div>
  );
}

export default App;