"use client";
import React, { useState } from 'react';
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="relative bg-[#ffffff80] rounded-xl overflow-hidden shadow-lg transition duration-500 hover:shadow-2xl transform hover:scale-105 mx-auto">
      <div
        className="h-60 bg-cover bg-center rounded-t-xl relative group p-2"
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#7c6a99]/10 to-transparent group-hover:from-[#7c6a99]/30">
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center hidden group-hover:flex transition-opacity duration-500">
            <Link href={gitUrl} className="h-14 w-14 border-2 border-[#7c6a99] hover:border-[#563e7b] rounded-full flex items-center justify-center mr-2">
              <CodeBracketIcon className="h-10 w-10 text-white hover:text-[#563e7b] transition-colors duration-300" />
            </Link>
            <button onClick={toggleDescription} className="h-14 w-14 border-2 border-[#7c6a99] hover:border-[#563e7b] rounded-full flex items-center justify-center">
              <EyeIcon className="h-10 w-10 text-white hover:text-[#563e7b] transition-colors duration-300" />
            </button>
          </div>
        </div>
      </div>
      {showDescription && (
        <div className="p-4 bg-[#ffffff99]">
          <h5 className="text-xl font-semibold text-[#42325b] mb-2">{title}</h5>
          <p className="text-[#42325b]">{description}</p>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
