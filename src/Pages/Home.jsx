import React from 'react'
import style from "./Home.module.css"

export const Home = () => {
  return (
    <section className={style.home}>
      <div>
        <div>
          <div className={style.heading_tertary}>Hi,</div>
          <div className={style.heading_secondary}>I'm <span className={style.name}>Jagan Sakharkar</span></div>
          <div className={style.heading_primary}>a Frontend Developer</div>
      
        </div>

        <p className={style.home_description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus exercitationem voluptatum eum doloremque a velit vitae dolores impedit eos recusandae?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, perspiciatis.
        </p>
        <button className={style.btn_hire}>Hire Me</button>
        <button className={style.btn_getCV}>Download CV</button>

      </div>

      <div></div>
    </section>
  )
}
