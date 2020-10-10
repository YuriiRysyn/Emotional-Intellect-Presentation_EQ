import React from 'react';
import { Header } from '../Header/Header';
import { Main } from './Main/Main';
import { Indicators } from '../Indicators/Indicators';
import classNames from 'classnames/bind';


import iPhoneX1 from '../../images/svg/slide1Img.svg';
import dots from '../../images/svg/Dots.svg';

import './Slide1.scss';

export const Slide1 = ({ selectedSlide, setSelectedSlide }) => (
  <div className="root-1">

      <Indicators 
        selectedSlide={selectedSlide} 
        setSelectedSlide={setSelectedSlide} 
      />

    <div className="slide1__header-wrapper">
      <Header selectedSlide={selectedSlide} />
    </div>

    <div className="slide1__container-for-content container-for-content" >
      <Main selectedSlide={selectedSlide} />
      <img 
        src={dots} 
        alt="2 column of white dots"
        className="slide1__dots"
      />
    </div>
    <img 
      src={iPhoneX1} 
      alt="hand holding Iphone" 
      className= {classNames(
        "slide1__img",
        { "slide1__img--active": selectedSlide === 1 },
      )} 
    />
    <div
      className= {classNames(
        "slide1__circle",
        { "slide1__circle--active": selectedSlide === 1 },
     )} 
     />
  </div>
);
