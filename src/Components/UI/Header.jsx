import React, { useState } from 'react';
import style from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { MdOutlineDarkMode } from "react-icons/md";
import { IoMenuSharp } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

export const Header = ({ dark, setDark }) => {
  const [isOpen, setIsOpen] = useState(false); // Initially false (menu closed)

  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <span className={style.logo}>IamJS</span>

        <div className={style.links}>
          <NavLink to="/" className={style.navLink}>HOME</NavLink>
          <NavLink to="/about" className={style.navLink}>ABOUT</NavLink>
          <NavLink to="/projects" className={style.navLink}>PROJECTS</NavLink>
          <NavLink to="/skills" className={style.navLink}>SKILLS</NavLink>
          <NavLink to="/contact" className={style.navLink}>CONTACT</NavLink>
        </div>

        <div className={style.iconBox}>
          {/* Toggling Menu Icons */}
          {isOpen ? (
            <IoCloseSharp
              className={`${style.on} ${style.icon}`}
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <IoMenuSharp
              className={`${style.on} ${style.icon}`}
              onClick={() => setIsOpen(true)}
            />
          )}

          {/* Theme Toggle Icon */}
          <MdOutlineDarkMode
            className={style.themeIcon}
            onClick={() => setDark(!dark)}
          />
        </div>
      </nav>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className={style.smallSLinks}>
          <NavLink to="/" className={style.navLink}>HOME</NavLink>
          <NavLink to="/about" className={style.navLink}>ABOUT</NavLink>
          <NavLink to="/projects" className={style.navLink}>PROJECTS</NavLink>
          <NavLink to="/skills" className={style.navLink}>SKILLS</NavLink>
          <NavLink to="/contact" className={style.navLink}>CONTACT</NavLink>
        </div>
      )}
    </header>
  );
};
