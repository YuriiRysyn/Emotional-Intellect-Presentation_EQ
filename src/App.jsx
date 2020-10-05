import React, { useState } from 'react';

import { Slide1 } from './components/slide1/Slide1';
import { Slide2 } from './components/Slide2/Slide2';
import { Slide3 } from './components/Slide3/Slide3';


import classNames from 'classnames/bind';

import './App.scss'
import { useEffect, useCallback } from 'react';


const App = () => {
  const [selectedSlide, setSelectedSlide] = useState(1);

  const renderAll = useCallback(() => (
    <div 
      // className="showSlides"
      className= {classNames(
        "showSlides",
      )} 
    >
       {/* display: none; */}
    <div 
      className= {classNames(
        "slideWrapper",
      { "slideWrapper active1": selectedSlide === 1 },
      { "slideWrapper active2": selectedSlide === 2 },
      { "slideWrapper active3": selectedSlide === 3 },
    )} 

     >
       <div 
        className="slide1Wrapper"
        id={selectedSlide === 1 ? 1 : ''}
       >
        {/* <Slide1 selectedSlide={selectedSlide} setSelectedSlide={setSelectedSlide}/> */}
        <Slide2 selectedSlide={selectedSlide} setSelectedSlide={setSelectedSlide}/>

       </div>
       <div 
        className="slide2Wrapper"
        id={selectedSlide === 2 ? 2 : ''}

       >
         {/* <Slide2 selectedSlide={selectedSlide} setSelectedSlide={setSelectedSlide}/> */}
          <Slide1 selectedSlide={selectedSlide} setSelectedSlide={setSelectedSlide}/>

       </div>
       <div className="slide3Wrapper">
        <Slide3 selectedSlide={selectedSlide} setSelectedSlide={setSelectedSlide}/>
       </div>
      </div>
  </div>
  ),[selectedSlide])

  return (
    renderAll()

    // <div 
    //   // className="showSlides"
    //   className= {classNames(
    //     "showSlides",
    //   )} 
    // >
    //      {/* display: none; */}
    //   <div 
    //   className= {classNames(
    //     "slideWrapper",
    //   { "slideWrapper active1": selectedSlide === 1 },
    //   { "slideWrapper active2": selectedSlide === 2 },
    //   { "slideWrapper active3": selectedSlide === 3 },
    //   )} 

    //    >
    //      <div className="slide1Wrapper">
    //       <Slide1 selectedSlide={selectedSlide} setSelectedSlide={setSelectedSlide}/>
    //      </div>
    //      <div className="slide2Wrapper">
    //        {selectedSlide > 1 ?
    //        <Slide2 selectedSlide={selectedSlide} setSelectedSlide={setSelectedSlide}/>
    //         : ''
    //        }
    //      </div>
    //      <div className="slide3Wrapper">
    //      {selectedSlide > 1 ?
    //       <Slide3 selectedSlide={selectedSlide} setSelectedSlide={setSelectedSlide}/>
    //         : ''
    //        }

    //      </div>
    //     </div>
    // </div>
  );
}

export default App;