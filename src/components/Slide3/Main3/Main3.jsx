import React from 'react';
import { StoreLinks } from '../../StoreLinks/StoreLinks';
import classNames from 'classnames/bind';

import './Main3.scss';

export const Main3 = ( {selectedSlide} ) => (
  <div className="slide3__main-content3 main-content3">

    <div 
      className= {classNames(
        "main-content3__title3",
        { "main-content3__title3--active": selectedSlide === 3 },
      )} 
    >
      <h1 className="main-content3__headling">
        что
        <br/>
          со&nbsp;мной
        <br/>
        <span className="main-content3__headling--selected-text">
          не так?
        </span>
      </h1>
    </div>
    <p 
      className= {classNames(
        "main-content3__description",
        { "main-content3__description--active": selectedSlide === 3 },
      )} 
    >
      находи ответы в новом
      <br/>
      мобильном приложении 
      <span className="main-content3__description--selected-text">
      &nbsp;EQ
      </span>
    </p>

    <StoreLinks selectedSlide={selectedSlide} />
  </div>
);