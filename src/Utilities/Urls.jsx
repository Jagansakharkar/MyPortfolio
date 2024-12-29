import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Home } from '../Home'
import { About } from '../Pages/About'
import { Contact } from '../Pages/Contact'
import { Services } from '../Pages/Services'
import { PageNotFound } from '../Pages/PageNotFound'


export const Urls = () => {
  return (
    <>
      
        <Routes>
          <Route index element={<Home />} />
          <Route exact path='about' element={<About />} />

          <Route exact path='services' element={<Services />} />

          <Route exact path='contact' element={<Contact />} />
          <Route path='*' element={<PageNotFound />} />

        </Routes>
      
    </>
  )
}
