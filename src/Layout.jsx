import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './Components/Header'
import { SocialLinks } from './Components/SocialLinks'
import Outlet from 'react-router-dom'
import style from "./Layout.module.css"

export const Layout = () => {
  return (
    <>
      <main className={style.main}>
        <Outlet />
      </main>
    </>

  )
}
