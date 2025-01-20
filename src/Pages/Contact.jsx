import React from 'react'
import { Form } from '../Components/UI/Form'
import style from './Contact.module.css'

export const Contact = () => {
  return (
    <>
      <section className={style.contactPage}>
        <div className={style.contactPage_heading}>
          <h1 className={style.heading_Primary}>Contact Me</h1>
        </div>
        <Form />
      </section>
    </>
  )
}
