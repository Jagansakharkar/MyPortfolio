import React from 'react'
import style from "./Skills.module.css"
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { BiLogoJava } from "react-icons/bi";
import { FaPython } from "react-icons/fa";

export const Skills = () => {
  return (
    <>
      <section className={style.skillsPage}>
        <div className={style.skillsPage_headings}>
          <h1 className={style.heading_Primary}>Skills</h1>
        </div>
        <div className={style.skillPage_content}>
          <div>
            <h3>FrontEnd</h3>
            <FaHtml5 className={`${style.icon} ${style.htmlIcon}`} />

            <FaCss3Alt className={`${style.icon} ${style.cssIcon}`} />
            <SiJavascript className={`${style.icon} ${style.jsIcon}`} />
            <GrReactjs className={`${style.icon} ${style.reactIcon}`} />
          </div>
          <div>
            <h3>BackEnd</h3>
            <FaNodeJs className={`${style.icon} ${style.nodeIcon}`} />
            <SiExpress className={`${style.icon} ${style.expressIcon}`} />
            <SiMongodb className={`${style.icon} ${style.mongoIcon}`} />
          </div>
          <div>
            <h3>Programming Languages</h3>
            <BiLogoJava className={`${style.icon} ${style.javaIcon}`} />
            <FaPython className={`${style.icon} ${style.pythonIcon}`} />
          </div>
        </div>
      </section>
    </>
  )
}
