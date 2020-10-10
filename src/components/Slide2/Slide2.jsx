import React from 'react';
import { Header } from '../Header/Header';
import { Main2 } from './Main2/Main2';
import { Indicators } from '../Indicators/Indicators';

import classNames from 'classnames/bind';

import holdingBananaHand from '../../images/svg/slide2Img.svg';
import dots from '../../images/svg/Dots.svg';

import './Slide2.scss';

export const Slide2 = ({ selectedSlide, setSelectedSlide }) => (
  <div className="root-2">

    <Indicators 
      selectedSlide={selectedSlide} 
      setSelectedSlide={setSelectedSlide} 
    />

    <div className="slide2__header-wrapper">
      <Header selectedSlide={selectedSlide} />
    </div>

    <div 
      className= {classNames(
        "slide2__container-for-content",
        { "slide2__container-for-content--active": selectedSlide === 2 },
      )} 
     >
      < Main2 selectedSlide={selectedSlide} />
      <img 
        src={dots} 
        alt="2 column of white dots"
        className="slide2__dots"
      />
    </div>

    <img 
      src={holdingBananaHand} 
      alt="hand holding banana" 
      className= {classNames(
        "slide2__img",
        { "slide2__img--active": selectedSlide === 2 },
      )} 
    />
    <div 
      className= {classNames(
        "slide2__circle",
        { "slide2__circle--active": selectedSlide === 2 },
      )} 
    />

  </div>
);