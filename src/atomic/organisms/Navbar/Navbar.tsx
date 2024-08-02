// src/components/LoginPage.tsx

import React, { useState } from 'react';
import './Navbar.scss';

import NavLinkActive from '../../atoms/NavLinkActive';

const Navbar: React.FC = () => {

  return (
    <nav className="nav">
    <ul className="nav__list">
      <NavLinkActive className='nav__list-item' activeClassName='nav__list-item--active' to='../courses'>Мои курсы</NavLinkActive>
      <NavLinkActive className='nav__list-item' activeClassName='nav__list-item--active' to='../base'>База знаний</NavLinkActive>
      <NavLinkActive className='nav__list-item' activeClassName='nav__list-item--active' to='../library'>Библиотека</NavLinkActive>
      <NavLinkActive className='nav__list-item' activeClassName='nav__list-item--active' to='../gallery'>Галерея</NavLinkActive>
      <NavLinkActive className='nav__list-item' activeClassName='nav__list-item--active' to='../newspaper'>Корпоративная газета</NavLinkActive>
    </ul>
  </nav>
  );
};

export default Navbar;
