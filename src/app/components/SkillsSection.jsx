"use client";
import React from 'react';
import {
  DiPython, DiGit, DiHtml5, DiCss3, DiReact, DiNodejs, DiJavascript1
} from 'react-icons/di';
import {
  SiTensorflow, SiPandas, SiNumpy, SiFlask, SiDjango, SiNextdotjs, SiTailwindcss, SiBootstrap, SiAmazonaws, SiAtlassian
} from 'react-icons/si';
import { FaLinux } from 'react-icons/fa';
import { Tooltip } from '@nextui-org/react';

const SkillsSection = () => {
  const techIcons = [
    { id: "html", icon: <DiHtml5 className="transition-all duration-300 text-5xl" />, label: "HTML5" },
    { id: "javascript", icon: <DiJavascript1 className="transition-all duration-300 text-5xl" />, label: "JavaScript" },
    { id: "css", icon: <DiCss3 className="transition-all duration-300 text-5xl" />, label: "CSS3" },
    { id: "nodejs", icon: <DiNodejs className="transition-all duration-300 text-5xl" />, label: "Node.js" },
    { id: "react", icon: <DiReact className="transition-all duration-300 text-5xl" />, label: "React" },
    { id: "nextjs", icon: <SiNextdotjs className="transition-all duration-300 text-5xl" />, label: "Next.js" },
    { id: "git", icon: <DiGit className="transition-all duration-300 text-5xl" />, label: "Git" },
    { id: "python", icon: <DiPython className="transition-all duration-300 text-5xl" />, label: "Python" },
    { id: "tensorflow", icon: <SiTensorflow className="transition-all duration-300 text-5xl" />, label: "TensorFlow" },
    { id: "pandas", icon: <SiPandas className="transition-all duration-300 text-5xl" />, label: "Pandas" },
    { id: "numpy", icon: <SiNumpy className="transition-all duration-300 text-5xl" />, label: "NumPy" },
    { id: "flask", icon: <SiFlask className="transition-all duration-300 text-5xl" />, label: "Flask" },
    { id: "django", icon: <SiDjango className="transition-all duration-300 text-5xl" />, label: "Django" },
    { id: "tailwindcss", icon: <SiTailwindcss className="transition-all duration-300 text-5xl" />, label: "Tailwind CSS" },
    { id: "bootstrap", icon: <SiBootstrap className="transition-all duration-300 text-5xl" />, label: "Bootstrap" },
    { id: "aws", icon: <SiAmazonaws className="transition-all duration-300 text-5xl" />, label: "AWS" },
    { id: "linux", icon: <FaLinux className="transition-all duration-300 text-5xl" />, label: "Linux" },
    { id: "atlassian", icon: <SiAtlassian className="transition-all duration-300 text-5xl" />, label: "Atlassian" },
  ];

  return (
    <section id="skills" className='pt-24 mb-42 mt-20'>
      <div className="bg-[#ffffff99] p-8 rounded-lg shadow-xl mt-5 max-w-screen-xl mx-auto bg-opacity-80">
        <h2 className="text-[#42325b] text-center text-4xl font-bold mb-8">Tech Stack</h2>
        
        <div className="flex justify-center items-center flex-wrap gap-8">
          {techIcons.map((tech) => (
            <Tooltip
              content={<span className="text-[#42325b]">{tech.label}</span>}
              key={tech.id}
              placement="top"
            >
              <div className="p-5 rounded-full bg-[#7c6a99]/20 hover:bg-[#7c6a99]/50 hover:scale-110 transition-transform duration-300 ease-out">
                <div className="text-[#42325b]">
                  {tech.icon}
                </div>
              </div>
            </Tooltip>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
