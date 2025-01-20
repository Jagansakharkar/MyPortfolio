import React from 'react'
import style from './About.module.css'

export const About = () => {
  return (
    <>
      <section className={style.about}>
        <div className={style.grid_container}>
          <div className={style.left}>
            <p className={style.content}>
              Hello! <br /><br />
              I'm Jagan Sakharkar, an enthusiastic Web Developer with a solid foundation in HTML5, CSS3, JavaScript, and ReactJS. I'm adept at crafting dynamic and engaging web experiences. My expertise extends beyond web development, encompassing robust skills in Java, Python, and SQL, giving me a versatile edge in the tech world.
              <br />
              Currently, I'm pursuing my Master’s in Computer Applications (MCA) at PCCoE Pune. This journey is all about pushing my boundaries in Computer Science and staying abreast of the latest innovations.
              <br /><br />
              I’m deeply passionate about giving back to the community. With over 3 years of experience teaching Mathematics to 8th-grade students and a year mentoring 12th-grade students in Computer Science at Bandewar's GTC, I’ve honed my communication, leadership, and problem-solving skills. These teaching experiences have fueled my passion for creating inclusive and dynamic learning environments
            </p>
          </div>


          <div className={style.right}>
            <div className={style.photo}>
              photo
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

