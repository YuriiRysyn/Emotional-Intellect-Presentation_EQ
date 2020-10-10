import React from 'react';
import { Header } from '../Header/Header';
import { Main3 } from './Main3/Main3';
import { Indicators } from '../Indicators/Indicators';

import classNames from 'classnames/bind';

import plant from '../../images/svg/slide3Img.svg';
import dots from '../../images/svg/Dots.svg';

import './Slide3.scss';

export const Slide3 = ({ selectedSlide, setSelectedSlide }) => (
  <div className="root-3">

    <Indicators 
      selectedSlide={selectedSlide} 
      setSelectedSlide={setSelectedSlide} 
    />

    <div className="slide3__header-wrapper">
      <Header selectedSlide={selectedSlide} />
    </div>

    <div 
      className= {classNames(
        "slide3__container-for-content",
        { "slide3__container-for-content--active": selectedSlide === 3 },
      )} 
     >
      < Main3 selectedSlide={selectedSlide} />
      <img 
        src={dots} 
        alt="3 column of white dots"
        className="slide3__dots"
      />
    </div>

    <img 
      src={plant} 
      alt="hand holding plant" 
      className= {classNames(
        "slide3__img",
        { "slide3__img--active": selectedSlide === 3 },
      )} 
    />
    <div 
      className= {classNames(
        "slide3__circle",
        { "slide3__circle--active": selectedSlide === 3 },
      )} 
    />

  </div>
);