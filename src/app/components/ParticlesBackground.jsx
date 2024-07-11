import React from 'react';
import Particles from "@tsparticles/react";
import { loadFull } from "@tsparticles/engine";

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const options = {
    fullScreen: {
      enable: true, // Control positioning through a div instead of fullScreen mode
      zIndex: 0
    },
    background: {
      color: {
        value: "transparent"
      },
      image: "url('/bg.1.png')", // Background image path (ensure this is correct)
      position: "50% 50%",
      repeat: "no-repeat",
      size: "cover"
    },
    particles: {
      color: {
        value: ["#ff595e", "#ffca3a", "#8ac926", "#1982c4", "#6a4c93"]
      },
      links: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: true,
        speed: 6,
        straight: false,
        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 1200
        }
      },
      number: {
        density: {
          enable: true,
          area: 800
        },
        value: 80
      },
      opacity: {
        value: 0.5
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 5
        }
      },
      size: {
        value: { min: 1, max: 5 }
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse"
        },
        onClick: {
          enable: true,
          mode: "push"
        }
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4
        },
        push: {
          quantity: 4
        }
      }
    },
    detectRetina: true
  };

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, background: `url('/bg.1.png') no-repeat center center / cover` }}>
      <Particles id="tsparticles" init={particlesInit} options={options} />
    </div>
  );
};

export default ParticlesBackground;
