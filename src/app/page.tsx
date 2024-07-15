"use client";
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EducationSection from './components/EducationSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import { useEffect } from 'react';
import Image from 'next/image';
import ParticlesBackground from "./components/ParticlesBackground";


function useScrollCorrection() {
  useEffect(() => {
    const correctScroll = () => {
      const { hash } = window.location;
      if (hash) {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 100, // Adjusting for fixed header height
            behavior: "smooth" // Smooth scroll for better user experience
          });
        }
      }
    };

    // Listen for hash changes to correct scroll position
    window.addEventListener('hashchange', correctScroll);
    return () => window.removeEventListener('hashchange', correctScroll);
  }, []);
}

export default function Home() {
    return (
      <main className="relative min-h-screen flex flex-col overflow-hidden">
        <div style={{
          position: 'fixed', // Changed from 'absolute' to 'fixed' to ensure background is stationary during scroll
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -2,
          overflow: 'hidden'
        }}>
          <Image
            src="/bg.1.png"
            alt="Background"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority  // Ensures the image is loaded with high priority
          />
          
        </div>
      <ParticlesBackground />
      <Navbar  />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ProjectsSection />
        <SkillsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
