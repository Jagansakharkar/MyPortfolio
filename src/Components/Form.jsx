import React from 'react'
import style from './Form.module.css'

// function handleSubmit()
// {

// }
// onSubmit={handleSubmit}
// onChange={handleChange}
// onChange={handleChange}
export const Form = () => {
  return (
    <form className={style.form}>
     
        <h2 className={style.form_heading}>Send Message</h2>
        <label>Name:</label><br />
        <input type="text" name="name" required /><br />
      
   
        <label>Email:</label><br />
        <input type="email" name="email" required /><br />
   
     
        <label>Message:</label><br />
        <textarea name="message" required /><br />
      
      <button type="submit" className={style.btn_send}>Send</button>
    </form>
  )
}
