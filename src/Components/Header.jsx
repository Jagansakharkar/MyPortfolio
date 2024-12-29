import React from 'react';
import style from './Header.module.css'
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <>
        <h1 className={style.logo}>IamJS</h1>
        <ul className={style.links}>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/services'>Services</NavLink></li>
          <li><NavLink to='/contact'>Contact</NavLink></li>
        </ul>

    </>
  );
};
