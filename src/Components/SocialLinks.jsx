import React from 'react'
import { SocialIcon } from 'react-social-icons'

import style from "./SocialLinks.module.css"

export const SocialLinks = () => {
  return (
    <>
      <section className={style.socialLinks_Container}>
        <SocialIcon className={`${style.icon} ${style.github}`} network='github' url='https://github.com/Jagansakharkar' />
        <SocialIcon className={`${style.icon} ${style.linkedin}`}  network='linkedin' url='https://www.linkedin.com/in/jagansakharkar/' />
      </section>
    </>

  )
}
