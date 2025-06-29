import React from 'react';

// Icons
import { FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaGithub } from "react-icons/fa";
import { SiJavascript, SiExpress, SiMongodb, SiNumpy, SiPandas, SiMysql,  SiTableau,  } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { BiLogoJava } from "react-icons/bi";
import { TbChartHistogram } from "react-icons/tb"; // for Matplotlib

export const Skills = () => {
  const dataTools = [
    { name: "NumPy", icon: <SiNumpy /> },
    { name: "Pandas", icon: <SiPandas /> },
    // { name: "Seaborn", icon: <SiSeaborn /> },
    { name: "Matplotlib", icon: <TbChartHistogram /> },
    // { name: "SQL", icon: <SiMysql /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "GitHub", icon: <FaGithub /> },
  ];

  return (
    <section id="skills" className="min-h-screen py-8 px-4 bg-background text-text">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h1 className="text-center text-3xl md:text-4xl font-bold text-primary mb-12">
          My Skills
        </h1>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-12 text-center">

          {/* Frontend */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-accent">Frontend</h3>
            <div className="flex justify-center gap-6 text-4xl text-primary">
              <FaHtml5 title="HTML5" />
              <FaCss3Alt title="CSS3" />
              <SiJavascript title="JavaScript" />
              <GrReactjs title="ReactJS" />
            </div>
          </div>

          {/* Backend */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-accent">Backend</h3>
            <div className="flex justify-center gap-6 text-4xl text-primary">
              <FaNodeJs title="Node.js" />
              <SiExpress title="Express.js" />
              <SiMongodb title="MongoDB" />
            </div>
          </div>

          {/* Programming Languages */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-accent">Languages</h3>
            <div className="flex justify-center gap-6 text-4xl text-primary">
              <BiLogoJava title="Java" />
              <FaPython title="Python" />
            </div>
          </div>
        </div>

        {/* Tools & Data Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-xl md:text-2xl font-semibold mb-6 text-accent">
            Tools & Data Skills
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
            {dataTools.map((tool, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-accent/10 hover:bg-accent/20 text-accent p-4 rounded-xl shadow-sm transition"
              >
                <div className="text-4xl mb-2">{tool.icon}</div>
                <div className="text-sm md:text-base font-medium">{tool.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
