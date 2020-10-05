import React from 'react';

import classNames from 'classnames/bind';

import './Nav.scss';

export const Nav = ({ selectedSlide }) => (
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
        <a 
          href="/#" 
          className= {classNames(
            "nav__link--download",
            { "nav__link--download active-header1": selectedSlide === 1 },
            { "nav__link--download active-header2": selectedSlide === 2 },
            { "nav__link--download active-header3": selectedSlide === 3 },
          )} 
        >
          Download
        </a>
      </li>
    </ul>
  </nav>
);
