import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active 
     ? "text-[#42325b] "
     : "text-[#8c7aa3] ";
  
     return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-[#8c7aa3] ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-purple-950 mt-2 mr-3"
      ></motion.div>
      
    </button>
  );
};

export default TabButton;