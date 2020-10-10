import React from 'react';
import { StoreLinks } from '../../StoreLinks/StoreLinks';
import classNames from 'classnames/bind';

import './Main2.scss';

export const Main2 = ( {selectedSlide} ) => (
  <div className="slide2__main-content2 main-content2">

    <div 
      className= {classNames(
        "main-content2__title2",
        { "main-content2__title2--active": selectedSlide === 2 },
      )} 
    >
      <h1 className="main-content2__headling">
        как
        <br/>
          управлять
        <br/>
        <span className="main-content2__headling--selected-text">
          емоциями
        </span>
      </h1>
    </div>
    <p 
      className= {classNames(
        "main-content2__description",
        { "main-content2__description--active": selectedSlide === 2 },
      )} 
    >
      находи ответы в новом
      <br/>
      мобильном приложении 
      <span className="main-content2__description--selected-text">
      &nbsp;EQ
      </span>
    </p>

    <StoreLinks selectedSlide={selectedSlide} />
  </div>
);