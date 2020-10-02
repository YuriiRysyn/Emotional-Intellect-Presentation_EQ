import React from 'react';

import './Header.scss';

import logo from '../../images/svg/logo.svg';

export const Header = () => (
  <header className="slide1__header header">
    <div className="header__logo">
      <a href="/#">
        <img src={logo} alt="logo"/>
      </a>
    </div>

    <nav className="header__nav nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a href="/#" className="nav__link">
            About
          </a>
        </li>
        <li className="nav__item">
          <a href="/#" className="nav__link">
            Features
          </a>
        </li>
        <li className="nav__item">
          <a href="/#" className="nav__link">
            Services
          </a>
        </li>
        <li className="nav__item">
          <a href="/#" className="nav__link">
            Contacts
          </a>
        </li>
        <li className="nav__item">
          <a href="/#" className="nav__link nav__link--download">
            Download
          </a>
        </li>
      </ul>
    </nav>
  </header>
);
