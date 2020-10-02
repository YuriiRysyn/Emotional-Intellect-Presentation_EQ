import React from 'react';
import { StoreLinks } from '../../StoreLinks/StoreLinks';

import './Main.scss';

export const Main = () => (
  <div className="slide1__main-content main-content">

    <div className="main-content__title">
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
    <p className="main-content__description">
      позаботьтесь о себе и
      <br/>
      своих близких
    </p>

    <StoreLinks />
  </div>
);