"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "LLM-Based Root Cause Analysis in AWS Microservices",
    description: "Leveraging large language models, this project focused on conducting in-depth root cause analysis within AWS microservices. It highlighted the application of machine learning techniques to enhance cloud service reliability and diagnostic capabilities.",
    image: "/images/projects/llm.project.png",
    gitUrl: "https://github.com/gayathritela/RCA-of-Cloud-Microservices/tree/main",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Portfolio Website Design",
    description: "This personal portfolio website showcases my skills, projects, and professional experience through a responsive design with dynamic animations. Built with React.js, Next.js, and Tailwind CSS, it includes sections for education, projects, and contact information.",
    image: "/images/projects/portfolio.png",
    gitUrl: "https://github.com/gayathritela/g-portfolio",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Content Delivery Network Design and Implementation",
    description: "This project developed a CDN to streamline video streaming processes, incorporating HTTP/2 for enhanced data transmission. A round-robin algorithm was utilized for effective load balancing across multiple servers, improving resource efficiency and user experience.",
    image: "/images/projects/cnn.png",
    gitUrl: "https://github.com/gayathritela/Content-Delivery-Network-Design-and-Implementation",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Freelancer Platform Website",
    description: "This project involved developing a dynamic platform for freelancers that integrates advanced web technologies for task management, user authentication, and interactive UI designs. It used Flask for backend operations and HTML, CSS, and Bootstrap for frontend development.",
    image: "/images/projects/freelancerarchitect.jpg",
    gitUrl: "/",
    previewUrl: "/",
  },

 
  {
    id: 5,
    title: "Fusion Routing Algorithm",
    description: "This project developed a novel routing algorithm to enhance network efficiency. The focus was on creating a versatile routing framework that could adapt to both aerial and terrestrial networking environments, significantly improving data flow and reducing latency.",
    image: "/images/projects/aerial.png",
    gitUrl: "https://www.ijirt.org/master/publishedpaper/IJIRT151458_PAPER.pdf",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "JUnit Testing Framework",
    description: "This project enhanced software development methodologies by integrating and optimizing JUnit testing frameworks. It aimed to streamline the testing process, ensuring higher software quality and reliability through comprehensive test coverage.",
    image: "/images/projects/junittest.jpg",
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="py-6 mt-8 mb-12">
      <h2 className="text-center text-4xl font-bold text-[#42325b] mt-4 mb-8 md:mb-12">
        Projects
      </h2>

      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
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
