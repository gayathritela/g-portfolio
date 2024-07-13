import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="bg-transparent relative min-h-screen flex flex-col items-center justify-start">
      {/* Text Container, set at top with margin for spacing */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="text-center mt-20" // Top margin to position text properly
      >
        <h1 className="text-3xl text-[#563e7b] sm:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
          Hello, I&apos;m{" "}
          <br/>
          <TypeAnimation
            sequence={[
              'Gayathiri Elambooranan', 2000,
              'Machine Learning Engineer', 2000,
              'Data Engineer', 2000,
              'Full Stack Developer', 2000,
              '', // Loop back to start
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            speed={30}
          />
        </h1>
        <p className='text-md lg:text-2xl text-[#563e7b] mb-40'>
          "The universe falls in love with a stubborn heart!"
        </p>
      </motion.div>

      {/* Button Container, placed below text with less margin */}
      <div className="mt-10 flex justify-center items-center"> 
        <Link
          href="/#contact"
          className="px-6 py-3 rounded-lg bg-gray-800 hover:bg-slate-800 text-purple-200 transition duration-300 ease-in-out mx-2"
          style={{ transform: "scale(1)" }}
          onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
        >
          Hire Me
        </Link>
        <a
          href="/Resume-Gayathiri.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-lg bg-gray-800 hover:bg-gray-800 text-purple-200 transition duration-300 ease-in-out mx-2"
          style={{ transform: "scale(1)" }}
          onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
        >
          Download CV
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
