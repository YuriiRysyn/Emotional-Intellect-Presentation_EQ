import React, { useState } from 'react';

import { Slide1 } from './components/slide1/Slide1';
import { Slide2 } from './components/Slide2/Slide2';


import './App.scss'

// const cssClasses = 'app app--active';

const App = () => {
  const [selectedSlide, setSelectedSlide] = useState(1);

  return (
    <div className="showSlides">

      <div className="slide1">
        <Slide1 selectedSlide={selectedSlide} setSelectedSlide={setSelectedSlide}/>
      </div>

      <div className="slide2">
        <Slide2 selectedSlide={selectedSlide} setSelectedSlide={setSelectedSlide}/>
      </div>

        <div className="slide3">
        
        </div>
        {/* <Slide1 selectedSlide={selectedSlide} setSelectedSlide={setSelectedSlide}/>
        <Slide2 selectedSlide={selectedSlide} setSelectedSlide={setSelectedSlide}/> */}

    </div>
  );
}

export default App;