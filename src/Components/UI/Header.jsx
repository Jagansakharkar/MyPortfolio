import React, { useState } from 'react';
import style from './Header.module.css'
import { NavLink } from 'react-router-dom';
import { MdOutlineDarkMode } from "react-icons/md";


export const Header = ({ dark, setDark }) => {

  return (
    <header className={style.header}>
      <h1 className={style.logo}>IamJS</h1>
      <ul className={style.links}>
        <li><NavLink to='/'>HOME</NavLink></li>
        <li><NavLink to='/about'>ABOUT</NavLink></li>
        <li><NavLink to='/projects'>PROJECTS</NavLink></li>
        <li><NavLink to='/services'>SERVICES</NavLink></li>
        <li><NavLink to='/contact'>CONTACT</NavLink></li>
        <li
          onClick={() => setDark(!dark)}
        >
          <MdOutlineDarkMode /></li>
      </ul>
    </header>

  );
};
