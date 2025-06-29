import React from 'react';
import { FaGithub } from "react-icons/fa6";
import { AiFillLinkedin } from "react-icons/ai";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen px-4 py-12 bg-background text-text flex items-center justify-center"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Text Section */}
        <div className="w-full md:w-1/2 space-y-5 text-center md:text-left">
          <h2 className="text-xl md:text-2xl">Hi,</h2>
          <h1 className="text-3xl md:text-5xl font-bold text-primary">
            I'm Jagan Sakharkar
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold">
            MERN Stack Developer
          </h2>
          <p className="text-base md:text-lg text-secondary">
            I design and build full-stack web applications with a focus on clean UI, scalable architecture, and great performance.
          </p>

          {/* Social Links + Resume Button */}
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 pt-4">
            {/* GitHub */}
            <a
              href="https://github.com/jagansakharkar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-accent hover:text-primary transition"
            >
              <FaGithub />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/jagansakharkar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-accent hover:text-primary transition"
            >
              <AiFillLinkedin />
            </a>

            {/* Resume Button */}
            <a
              href="/resume.pdf"
              download
              className="bg-blue-600 text-white px-5 py-2 rounded-md text-sm md:text-base font-medium transition duration-300 hover:bg-blue-700 hover:shadow-lg hover:scale-105"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          {/* Replace below div with actual image when ready */}
          <div className="w-64 h-64 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md">
            Your Photo
          </div>
        </div>
      </div>
    </section>
  );
};
