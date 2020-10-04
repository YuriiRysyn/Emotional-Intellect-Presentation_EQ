import React, { useState } from 'react';
// import Carousel from 'react-elastic-carousel';

import { Slide1 } from './components/slide1/Slide1';
import { Slide2 } from './components/Slide2/Slide2';
import { Slide3 } from './components/Slide3/Slide3';


import classNames from 'classnames/bind';

// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
// import 'pure-react-carousel/dist/react-carousel.es.css';


import './App.scss'

// const cssClasses = 'app app--active';

const App = () => {
  const [selectedSlide, setSelectedSlide] = useState(1);

  return (
    <div 
      // className="showSlides"
      className= {classNames(
        "showSlides",
      { "showSlides": selectedSlide === 1 },
      { "showSlides active2": selectedSlide === 2 },
      { "showSlides active3": selectedSlide === 3 },
      )} 
    >

      <div className="slide1wrapper">
        {selectedSlide === 1 ?
        <Slide1 selectedSlide={selectedSlide} setSelectedSlide={setSelectedSlide}/>
        // : <div classNames="empty"></div>
        :''

        }
        {/* <Slide1 selectedSlide={selectedSlide} setSelectedSlide={setSelectedSlide}/> */}
      </div>

      <div className="slide2wrapper">
      {selectedSlide === 2 ?
        <Slide2 selectedSlide={selectedSlide} setSelectedSlide={setSelectedSlide}/>
        // : <div classNames="empty"></div>
        :''

        }
        {/* <Slide2 selectedSlide={selectedSlide} setSelectedSlide={setSelectedSlide}/> */}
      </div>

        <div className="slide3wrapper">
        {selectedSlide === 3 ?
        <Slide3 selectedSlide={selectedSlide} setSelectedSlide={setSelectedSlide}/>
        // : <div classNames="empty"></div>
        :''

        }
        </div>
        {/* <Slide1 selectedSlide={selectedSlide} setSelectedSlide={setSelectedSlide}/>
        <Slide2 selectedSlide={selectedSlide} setSelectedSlide={setSelectedSlide}/> */}

    </div>

//   <Carousel itemsToShow={1}>

//  <Slide1 selectedSlide={selectedSlide} setSelectedSlide={setSelectedSlide}/>

//    <Slide2 selectedSlide={selectedSlide} setSelectedSlide={setSelectedSlide}/>


// </Carousel>

  );


}

export default App;