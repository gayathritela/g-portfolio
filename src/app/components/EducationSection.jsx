import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const EducationSection = () => {
  const educationData = [
    {
      institution: 'Concordia University, Montreal, Quebec, Canada',
      degree: 'Master of Engineering – Electrical and Computer',
      year: '2022 - 2024',
    },
    {
      institution: 'SRM Institute of Science and Technology, Chennai, India',
      degree: 'Bachelor of Engineering - Electronics and Communication',
      year: '2017 - 2021',
    },
  ];

  return (
    <section id='education' className='pt-24 mb-20 mt-20'>
      <h2 className="text-3xl text-[#42325b] font-bold mb-8 text-center">Education</h2>
      <div className="relative">
        <div className="absolute border-l-4 border-[#7c6a99] h-full left-1/2 transform -translate-x-1/2"></div>
        {educationData.map((edu, index) => (
          <div key={index} className="mb-16 flex justify-between items-center w-full">
            <div className={`w-5/12 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
              {index % 2 === 0 && (
                <div className="bg-[#ffffff99] rounded-lg shadow-xl p-4 inline-block transform transition-transform duration-300 hover:scale-105">
                  <h3 className="font-bold text-xl mb-1 text-[#42325b]">{edu.degree}</h3>
                  <p className="text-[#7c6a99]">{edu.institution}</p>
                  <p className="text-[#7c6a99]">{edu.year}</p>
                </div>
              )}
            </div>
            <div className="z-20 flex items-center bg-[#7c6a99] shadow-xl w-8 h-8 rounded-full transform transition-transform duration-300 hover:scale-125">
              <FaGraduationCap className="text-white w-full h-full p-2" />
            </div>
            <div className={`w-5/12 ${index % 2 !== 0 ? 'text-left' : 'text-right'}`}>
              {index % 2 !== 0 && (
                <div className="bg-[#ffffff99] rounded-lg shadow-xl p-4 inline-block transform transition-transform duration-300 hover:scale-105">
                  <h3 className="font-bold text-xl mb-1 text-[#42325b]">{edu.degree}</h3>
                  <p className="text-[#7c6a99]">{edu.institution}</p>
                  <p className="text-[#7c6a99]">{edu.year}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
