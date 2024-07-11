"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Education",
    path: "#education",
  },
  {
    title: "Skills",
    path: "#skills",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 ">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* G Portfolio - Adjust the margins to move more to the corner */}
        <Link href="/" className="text-3xl text-[#42325b] font-bold mr-auto pl-2">
          G Portfolio
        </Link>
        <div className="block md:hidden">
          <button onClick={() => setNavbarOpen(!navbarOpen)} className="text-3xl p-3 rounded">
            {navbarOpen ? <XMarkIcon className="h-8 w-8 text-[#42325b]" /> : <Bars3Icon className="h-8 w-8 text-[#42325b]" />}
          </button>
        </div>
        {/* Menu Items - Adjust padding and margin to move closer to the corner */}
        <div className={`hidden md:flex ${navbarOpen ? "flex" : "hidden"} ml-auto pr-2`}>
          <ul className="flex flex-col md:flex-row md:space-x-12 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.path}
                  className="text-[#42325b] px-3 py-2 rounded-lg font-semibold hover:bg-[#7c6a99]/50 transition-transform duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    const section = document.querySelector(link.path);
                    window.scrollTo({
                      top: section.offsetTop - document.querySelector("nav").offsetHeight,
                      behavior: 'smooth'
                    });
                    setNavbarOpen(false);
                  }}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 shadow-lg">
          <ul className="flex flex-col">
            {navLinks.map((link, index) => (
              <li key={index} className="w-full">
                <a
                  href={link.path}
                  className="block text-center text-[#42325b] py-2 rounded font-semibold transition-transform duration-300 hover:bg-[#7c6a99]/50"
                  style={{ transform: "scale(1)" }}
          onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                  onClick={(e) => {
                    e.preventDefault();
                    const section = document.querySelector(link.path);
                    window.scrollTo({
                      top: section.offsetTop - document.querySelector("nav").offsetHeight,
                      behavior: 'smooth'
                    });
                    setNavbarOpen(false);
                  }}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
