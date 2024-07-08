"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";


const projectsData = [
  {
    id: 1,
    title: "LLM-Based Root Cause Analysis in AWS Microservices",
    description: "Leveraging large language models, this project focused on conducting in-depth root cause analysis within AWS microservices. It highlighted the application of machine learning techniques to enhance cloud service reliability and diagnostic capabilities.",
    image: "/images/projects/llm.project.png",
    tag: ["All", "Machine Learning"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Freelancer Platform Website",
    description: "This project involved developing a dynamic platform for freelancers that integrates advanced web technologies for task management, user authentication, and interactive UI designs. It used Flask for backend operations and HTML, CSS, and Bootstrap for frontend development.",
    image: "/images/projects/freelancerarchitect.jpg",
    tag: ["All", "Engineering"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Content Delivery Network Design and Implementation",
    description: "This project developed a CDN to streamline video streaming processes, incorporating HTTP/2 for enhanced data transmission. A round-robin algorithm was utilized for effective load balancing across multiple servers, improving resource efficiency and user experience.",
    image: "/images/projects/cnn.png",
    tag: ["All", "Networking"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Design and Simulation of a Wireless Sub Network",
    description: "Using QualNet software, this project involved the design and simulation of a wireless network comprising multiple subnets, enabling detailed analysis of network behavior under various conditions and optimizing communication protocols across the network.",
    image: "/images/projects/telenet.png",
    tag: ["All", "Networking"],
    gitUrl: "/",
    previewUrl: "/",
  },

  {
    id: 5,
    title: "Digital Systems Design and Synthesis",
    description: "The project centered on the design of an arithmetic unit, specifically focusing on the development and synthesis of digital systems. It explored the computational mechanisms and algorithms necessary for effective digital circuit design.",
    image: "/images/projects/dsd.png",
    tag: ["All", "Engineering"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Fusion Routing Algorithm",
    description: "This project developed a novel routing algorithm to enhance network efficiency. The focus was on creating a versatile routing framework that could adapt to both aerial and terrestrial networking environments, significantly improving data flow and reducing latency.",
    image: "/images/projects/fusionroutingalgorithm.png",
    tag: ["All", "Networking"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "JUnit Testing Framework",
    description: "This project enhanced software development methodologies by integrating and optimizing JUnit testing frameworks. It aimed to streamline the testing process, ensuring higher software quality and reliability through comprehensive test coverage.",
    image: "/images/projects/junittest.jpg",
    tag: ["All", "Engineering"],
    gitUrl: "/",
    previewUrl: "/",
  },
  
];


const ProjectsSection = () => {
  const [tag, setTag] = useState ('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
   
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };


 
  return (
    <section id="projects">
    
    
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>

      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag onClick={() => handleTagChange("All")} name="All" isSelected={tag === "All"} />
        <ProjectTag onClick={() => handleTagChange("Machine Learning")} name="Machine Learning" isSelected={tag === "Machine Learning"} />
        <ProjectTag onClick={() => handleTagChange("Networking")} name="Networking" isSelected={tag === "Networking"} />
        <ProjectTag onClick={() => handleTagChange("Engineering")} name="Engineering" isSelected={tag === "Engineering"} />
        
      </div>

      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;