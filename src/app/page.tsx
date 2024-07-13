"use client";
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EducationSection from './components/EducationSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
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
            top: element.offsetTop - 100, 
            behavior: "smooth"
          });
        }
      }
    };

    window.addEventListener('hashchange', correctScroll);
    return () => window.removeEventListener('hashchange', correctScroll);
  }, []);
}

export default function Home() {
  useScrollCorrection();

  return (
    <main className="relative min-h-screen flex flex-col overflow-hidden">
      <div style={{
        position: 'fixed',
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
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
        />
        <ParticlesBackground />
      </div>

      <Navbar />
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
