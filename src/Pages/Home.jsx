import React from 'react'
import style from "./Home.module.css"
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <section className={style.home}>
      <div className={`${style.container} ${style.grid_container}`}>
        <div className={style.left}>

          <div className={style.intro}>
            <span className={style.greeting}> Hi,</span><br />
            <span className={style.intro_text}>
              I'm <span className={style.name}>Jagan Sakharkar
              </span>
            </span><br />
            <span className={style.role}>Frontend Developer</span>

            <p className={style.home_description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus exercitationem voluptatum eum doloremque a velit vitae dolores impedit eos recusandae?
              Lorem ipsum
            </p>
            <div className={style.btns}>
              <button className={style.btn_hire}>Hire Me</button>
              <button className={style.btn_getCV}> <Link to='/resume'>Download CV</Link></button>
            </div>
          </div>

        </div>

        <div className={style.right}>
          <div className={style.photo}></div>
        </div>
      </div>
    </section>
  )
}
