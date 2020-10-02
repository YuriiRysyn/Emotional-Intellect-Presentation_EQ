import React from 'react';

import './Nav.scss';

export const Nav = () => (
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
        <a href="/#" className="nav__link--download">
          Download
        </a>
      </li>
    </ul>
  </nav>
)