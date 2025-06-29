import React from 'react';

export const About = () => {
  return (
    <section id="about" className="min-h-screen bg-background text-text px-4 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-center text-3xl md:text-4xl font-bold text-primary mb-12">
          About Me
        </h1>

        {/* Image + Text Row */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Block */}
          <div className="w-full md:w-1/3 flex justify-center">
            {/* Replace with actual image */}
            <div className="w-60 h-60 rounded-full bg-blue-200 shadow-md flex items-center justify-center text-xl font-semibold text-white">
              Your Photo
            </div>
          </div>

          {/* Text Block */}
          <div className="w-full md:w-2/3 text-base md:text-lg leading-relaxed space-y-4">
            <p>
              Hello! I'm <strong className="text-accent">Jagan Sakharkar</strong>, an enthusiastic Web Developer with a solid foundation in HTML5, CSS3, JavaScript, and ReactJS. I'm adept at crafting dynamic and engaging web experiences. My expertise also includes Java, Python, and SQL — giving me a versatile edge in the tech world.
            </p>

            <p>
              I'm currently pursuing my <strong>MCA</strong> at <strong>PCCoE Pune</strong>, consistently exploring the latest trends and technologies in Computer Science.
            </p>

            <p>
              I’m deeply passionate about education. I’ve taught Mathematics to 8th graders for over 3 years, and mentored 12th-grade students in Computer Science at Bandewar's GTC. These experiences helped me refine my communication, leadership, and problem-solving skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
