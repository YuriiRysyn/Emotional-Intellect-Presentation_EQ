import React from 'react';
import { StoreLinks } from '../../StoreLinks/StoreLinks';
import classNames from 'classnames/bind';

import './Main.scss';

export const Main = ({ selectedSlide } ) => (
  <div className="slide1__main-content main-content">

    <div 
      className= {classNames(
        "main-content__title",
        { "main-content__title--active": selectedSlide === 1 },
      )} 
    >
      <h1 className="main-content__headling">
        Твой 
        <br/>
        <span className="main-content__headling--orange-text">
          эмоцио-
        </span>
        <br/>
        <span className="main-content__headling--orange-text">
          нальний
        </span>
        <br/>
        тренер
      </h1>
    </div>
    <p 
    className= {classNames(
      "main-content__description",
      { "main-content__description--active": selectedSlide === 1 },
    )} 
    >
      позаботьтесь о себе и
      <br/>
      своих близких
    </p>

    <StoreLinks selectedSlide={selectedSlide}/>
  </div>
);