import React from 'react';
import { Header } from '../Header/Header';
import { Main } from './Main/Main';

import iPhoneX1 from '../../images/svg/iPhoneX-1.svg';

import './Slide1.scss';

export const Slide1 = () => (
  <div className="root-1 ">

    <div className="slide1 containerForContent" >
      <Header />

      <Main />

      <div className="animation-test">
        <div className="container-for-img">
          <img src={iPhoneX1} alt="hand"/>
        </div>
        <div className="circle">
        </div>

      </div>
    </div>


  </div>
)

Slide1.propTypes = {

}

// export default Header;