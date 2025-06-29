import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 text-sm px-4 py-6 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Copyright */}
        <p className="text-center md:text-left">
          &copy; {new Date().getFullYear()} <strong>IamJS</strong>. All rights reserved.
        </p>

        {/* Footer Links */}
        <ul className="flex gap-4 text-blue-600">
          <li>
            <a
              href="https://github.com/jagansakharkar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/jagansakharkar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href="mailto:jagansakharkar@gmail.com" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
