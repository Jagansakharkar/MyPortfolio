import React from 'react'
import { Form } from '../Components/UI/Form'
import  style  from './Contact.module.css'

export const Contact = () => {
  return (
    <>
      <section className={style.contactPage}>
        <div className={style.contactPage_msg}>
          Lets Connect message us
        </div>
        <Form />
      </section>
    </>
  )
}
