import React from 'react';
import { Header } from '../Header/Header';
import { Main } from '../slide1/Main/Main';
import { Indicators } from '../Indicators/Indicators';


import iPhoneX1 from '../../images/svg/iPhoneX-1.svg';
import dots from '../../images/svg/Dots.svg';

import './Slide2.scss';

export const Slide2 = ({ selectedSlide, setSelectedSlide }) => (
  <div className="root-2">

    <div className="slide2 containerForContent" >
      <Header />
      <Main />

      <Indicators 
        selectedSlide={selectedSlide} 
        setSelectedSlide={setSelectedSlide} 
      />

      <img 
        src={dots} 
        alt="2 column of white dots"
        className="slide1__dots"
      />

    </div>

    <img src={iPhoneX1} alt="hand holding Iphone" className="slide1__img"/>
    <div className="circle" />



  </div>
)