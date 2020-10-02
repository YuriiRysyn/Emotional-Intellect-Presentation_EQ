import React from 'react';
import { Nav } from './Nav/Nav';
 
import './Header.scss';

import logo from '../../images/svg/logo.svg';

export const Header = () => (
  <header className="slide1__header header">
    <div className="header__logo">
      <a href="/#">
        <img src={logo} alt="logo"/>
      </a>
    </div>
    
    <Nav />
  </header>
);
