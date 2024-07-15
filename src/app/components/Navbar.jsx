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
    title: "Education",
    path: "#education",
  },
  {
    title: "Projects",
    path: "#projects",
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
    <nav className="fixed top-0 left-0 right-0 z-30 md:backdrop-blur-none backdrop-blur-lg">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between bg-transparent">
        <Link href="/" className="text-3xl text-[#42325b] font-bold mr-auto pl-2">
          G Portfolio
        </Link>
        <div className="block md:hidden">
          <button onClick={() => setNavbarOpen(!navbarOpen)} className="text-3xl p-3 rounded">
            {navbarOpen ? <XMarkIcon className="h-8 w-8 text-[#42325b]" /> : <Bars3Icon className="h-8 w-8 text-[#42325b]" />}
          </button>
        </div>
        <div className={`hidden md:flex ${navbarOpen ? "flex" : "hidden"} ml-auto pr-2`}>
          <ul className="flex flex-col md:flex-row md:space-x-12 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.path}
                  className="text-[#42325b] px-3 py-2 rounded-lg font-semibold hover:bg-[#7c6a99]/20 transition-transform duration-300"
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
        <div className="absolute top-full left-0 right-0 z-10  bg-[#e3d7e9]/95  backdrop-blur-lg">
          <ul className="flex flex-col text-center text-[#42325b]">
            {navLinks.map((link, index) => (
              <li key={index} className="w-full py-2 hover:bg-[#7c6a99]/20 transition-transform duration-300">
                <a
                  href={link.path}
                  className="block rounded font-semibold"
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
