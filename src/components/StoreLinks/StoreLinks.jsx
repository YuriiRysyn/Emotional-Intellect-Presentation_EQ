import React from 'react';
import classNames from 'classnames/bind';

import appleLogo from '../../images/svg/AppleLogo.svg';
import androidLogo from '../../images/svg/AndroidLogo.svg';

import './StoreLinks.scss';

export const StoreLinks = ({ selectedSlide }) => (
  <div 
    className= {classNames(
      "main-content__store store",
      { "store--active1": selectedSlide === 1 },
      { "store--active2": selectedSlide === 2 },
      { "store--active3": selectedSlide === 3 },
    )}
  >

  <a href="https://www.apple.com/ru/ios/app-store" className="store__link">
    <img src={appleLogo} alt="apple store logo" className="store__link--logo"/>
    <div className="store__link--description">
      <p className="store__link--description-download">Download on the</p>
      <p className="store__link--description-market-name">App&nbsp;store</p>
    </div>
  </a>

  <a href="https://play.google.com/store/apps?hl=uk" className="store__link">
    <img src={androidLogo} alt="apple store logo"/>
    <div className="store__link--description">
      <p className="store__link--description-download">Get it on</p>
      <p className="store__link--description-market-name">Google&nbsp;play</p>
    </div>
  </a>

</div>
)