"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion } from "framer-motion";

const TAB_DATA = [
  {
    title: "Domain",
    id: "Domain",
    content: (
      <ul className="list-disc pl-2">
        <li>Machine Learning</li>
        <li>Data Engineering</li>
        <li>Web Development</li>
        <li>Cloud Engineer</li>
      </ul>
    ),
  },
  
  {
    title: "Interests",
    id: "Interests",
    content: (
      <ul className="list-disc pl-2">
        <li>Strength Training</li>
        <li>Photography</li>
        <li>Anime</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("Domain");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-[#42325b] pt-12 mb-20 mt-12" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 bg-white bg-opacity-60 rounded-lg shadow-lg">
        <motion.div
          className="overflow-hidden rounded-lg mb-8 md:mb-0"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src="/g-about.jpg"
            width={450}
            height={450}
            className="rounded-lg shadow-lg"
            alt="About Image"
          />
        </motion.div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-[#42325b] mb-4">About Me</h2>
          <p className="text-[#6d5d87] lg:text-lg">
            I am a graduate research student at Concordia University specializing in LLM-based root cause analysis. My research focuses on enhancing system reliability within AWS microservices using advanced ML models and data processing techniques. I am experienced in machine learning, data analysis, and software development, employing rigorous methodologies like Agile and Scrum in project management.
          </p>
          <div className="flex flex-row justify-start flex-wrap mt-8 space-x-4">
            <TabButton
              selectTab={() => handleTabChange("Domain")}
              active={tab === "Domain"}
            >
              Domain
            </TabButton>
            
            <TabButton
              selectTab={() => handleTabChange("Interests")}
              active={tab === "Interests"}
            >
              Interests
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
