import React from 'react';
import { StoreLinks } from '../../StoreLinks/StoreLinks';

import './Main2.scss';

export const Main2 = () => (
  <div className="slide2__main-content2 main-content2">

    <div className="main-content2__title">
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
    <p className="main-content2__description">
      находи ответы в новом
      <br/>
      мобильном приложении 
      <span className="main-content2__description--selected-text">
      &nbsp;EQ
      </span>
    </p>

    <StoreLinks />
  </div>
);