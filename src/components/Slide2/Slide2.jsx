import React from 'react';
import { Header } from '../Header/Header';
import { Main2 } from './Main2/Main2';
import { Indicators } from '../Indicators/Indicators';


// import iPhoneX1 from '../../images/svg/iPhoneX-1.svg';
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

    <div className="slide2__container-for-content" >
      < Main2 />
      <img 
        src={dots} 
        alt="2 column of white dots"
        className="slide2__dots"
      />
    </div>

    {/* <img src={iPhoneX1} alt="hand holding Iphone" className="slide2__img"/> */}
    <div className="slide2__circle" />

  </div>
);