"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
      <li>Machine Learning: Transformers, TensorFlow, scikit-learn, NLP, LLM, RAG</li>
      <li>Data Analysis & Tools: Pandas, NumPy, Matplotlib, seaborn, NEO.4J, Pinecone, SciPy, Excel</li>
      <li>Programming: Python, SQL, Flask, Django, C, HTML, CSS, Verilog</li>
      <li>Software & Tools: Linux, MATLAB, Jira, Git</li>
      <li>Methodologies: Agile, Scrum, Continuous Improvement, Project Management, Data Pipelines</li>
    </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
        <ul className="list-disc pl-2">
        <li>Master of Engineering – Electrical and Computer, Concordia University, Montreal, Quebec, Canada</li>
        <li>Bachelor of Engineering - Electronics and Communication, SRM Institute of Science and Technology, Chennai, India</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
       
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
         
          <h2 className="text-4xl font-bold text-white mb-4">
          About Me
          </h2>
          
          <p className="text-base lg:text-lg">
            I am a graduate research student at Concordia University specializing in LLM-based root cause analysis. My research focuses on enhancing system reliability within AWS microservices using advanced ML models and data processing techniques. I am experienced in machine learning, data analysis, and software development, employing rigorous methodologies like Agile and Scrum in project management.
          </p>
          
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
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