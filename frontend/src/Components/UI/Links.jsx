import React from "react";
import { Link as LinkScroll } from "react-scroll";
const navItems = [
  { label: "HOME", to: "home" },
  { label: "ABOUT", to: "about" },
  { label: "PROJECTS", to: "projects" },
  { label: "SKILLS", to: "skills" },
  { label: "CONTACT", to: "contact" },
];

export const Links = ({ direction = "horizontal" }) => {
  return (
    <div className={`flex ${direction === "horizontal" ? "gap-10" : "flex-col gap-4 text-center"}`}>
      {navItems.map((item, index) => (
        <LinkScroll
          key={index}
          to={item.to}
          smooth={true}
          className={({ isActive }) =>
            `text-sm md:text-base transition-all duration-200 cursor-pointer ${isActive ? 'text-accent font-semibold' : 'text-text'
            } hover:text-accent hover:underline underline-offset-4`
          }
        >
          {item.label}
        </LinkScroll>
      ))}
    </div>
  );
};
