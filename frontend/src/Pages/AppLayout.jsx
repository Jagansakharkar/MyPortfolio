import React, { useState, useRef, useEffect } from 'react';
import { ThemeContextWrapper } from '../context/ThemeContext';

import { Header } from '../Components/common/Header';
import { Footer } from '../Components/common/Footer';
import { Home } from './Home'
import { About } from './About'
import { Skills } from './Skills'
import { Projects } from './Projects'
import { Contact } from './Contact'


import { FaAngleDoubleUp } from "react-icons/fa";
export const AppLayout = () => {
  const upref = useRef()
  const [showUpButton, setShowUpButton] = useState(false);

  const scrollToUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // Show the button after scrolling 200px
  useEffect(() => {
    const handleScroll = () => {
      setShowUpButton(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    < div className='relative'>

      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <div>
        {showUpButton && (
          <div
            ref={upref}
            onClick={scrollToUp}
            className="fixed bottom-5 right-5 z-50 bg-orange-500 w-[45px] h-[45px] flex items-center justify-center rounded-full cursor-pointer text-white shadow-lg hover:bg-orange-600 transition"
            title="Go to Top"
          >
            <FaAngleDoubleUp size={20} />
          </div>

        )}
      </div>
    </div>
  );
}


