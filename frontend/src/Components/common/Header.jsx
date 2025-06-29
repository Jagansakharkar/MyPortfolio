import React, { useContext, useState } from 'react';
import { Links } from '../UI/Links';
import { MdOutlineDarkMode } from "react-icons/md";
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";
import { ThemeContext } from '../../context/ThemeContext';

export const Header = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='px-4 bg-gray-100 text-gray-600' >
      <nav className='flex items-center justify-between px-4 py-2 bg-background text-text shadow'>
        {/* Logo */}
        <span className='text-xl font-bold text-primary'>IamJS</span>

        {/* Desktop Navigation Links */}
        <div className='hidden md:flex'>
          <Links direction="horizontal" />
        </div>

        {/* Right-side icons for mobile */}
        <div className='flex gap-4 items-center md:hidden'>
          {/* Menu toggle */}
          {isOpen ? (
            <IoCloseSharp
              className='text-2xl cursor-pointer'
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <IoMenuSharp
              className='text-2xl cursor-pointer'
              onClick={() => setIsOpen(true)}
            />
          )}

          {/* Theme toggle */}
          <MdOutlineDarkMode
            className='text-2xl cursor-pointer text-primary dark:text-dark-primary'
            onClick={() => setDarkMode(!darkMode)}
          />
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-background text-text px-4 py-2">
          <Links direction="vertical" />
        </div>
      )}
    </header>
  );
};
