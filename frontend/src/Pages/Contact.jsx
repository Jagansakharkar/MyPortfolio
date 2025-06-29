import React from 'react'
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Form } from '../Components/UI/Form'


export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen px-4 py-5 bg-background text-text flex flex-col items-center"
    >
      {/* Heading */}
      <h1 className="text-center text-2xl md:text-4xl font-semibold mb-10">
        Contact Me
      </h1>

      {/* Content Row */}
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-10">
        {/* Left Div */}
        <div className="w-full md:w-1/2 p-6 bg-gray-100 rounded-xl shadow-md text-gray-800">
          {/* Greeting */}
          <h2 className="text-2xl font-bold mb-2">Let's Connect!</h2>
          <p className="mb-4 text-sm text-gray-600">
            Whether you have a question, project idea, or just want to say hi — my inbox is always open.
          </p>

          {/* Contact Details */}
          <div className="mb-4">
            <h3 className="font-semibold">📍 Location:</h3>
            <p className="text-sm">Pune, Maharashtra, India</p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">📞 Phone:</h3>
            <p className="text-sm">+91-9527397420</p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">✉️ Email:</h3>
            <p className="text-sm">jagansakharkar@email.com</p>
          </div>

          {/* Social Media */}
          <div className="flex items-center gap-4 mt-4">
            <a href="https://github.com/jagansakharkar" target="_blank" rel="noopener noreferrer" title="GitHub">
              <AiOutlineGithub className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/jagansakharkar" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" title="Twitter">
              <FaSquareXTwitter className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Right Div (Form) */}
        <div className="w-full md:w-1/2">
          <Form />
        </div>
      </div>
    </section>
  )
}
