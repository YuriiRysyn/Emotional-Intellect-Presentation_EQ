import React from 'react';
import { Header } from '../Header/Header';

import iPhoneX1 from '../../images/svg/iPhoneX-1.svg';

import './Slide1.scss';

export const Slide1 = () => (
  <div className="root-1 ">

    <div className="slide1 containerForContent" >
      <Header />

      <div class="animation-test">
        <div class="container-for-img">
          <img src={iPhoneX1} alt="hand"/>
        </div>
        <div class="circle">
        </div>

      </div>
    </div>


  </div>
)

Slide1.propTypes = {

}

// export default Header;