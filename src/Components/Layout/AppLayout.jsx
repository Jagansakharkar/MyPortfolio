import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../UI/Header';
import { SocialLinks } from '../UI/SocialLinks';
import { Footer } from '../UI/Footer';
import style from "./AppLayout.module.css"

export const AppLayout = () => {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? style.dark : style.light}>
      <Header dark={dark} setDark={setDark} />
      <SocialLinks />
      <Outlet />
      <Footer />
    </div>
  );
}


