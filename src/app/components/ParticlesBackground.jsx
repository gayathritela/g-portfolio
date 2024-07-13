import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const ParticlesBackground = () => {
    const particlesInit = useCallback(async (engine) => {
        // Initialize the tsParticles instance with the slim version to optimize performance
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback((container) => {
        console.log("Particles loaded: ", container);
    }, []);

    return (
      <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
              fpsLimit: 60,
              interactivity: {
                  events: {
                      onClick: {
                          enable: true,
                          mode: "push",
                      },
                      onHover: {
                          enable: true,
                          mode: "bubble",
                      },
                      resize: true,
                  },
                  modes: {
                      bubble: {
                          distance: 200,
                          size: 10,
                          duration: 2,
                          opacity: 0.8,
                          speed: 3
                      },
                      push: {
                          quantity: 4
                      }
                  }
              },
              particles: {
                  color: {
                      value: "#ffffff",
                  },
                  move: {
                      direction: "bottom",
                      enable: true,
                      outModes: {
                          bottom: "out",
                          left: "out",
                          right: "out",
                          top: "out"
                      },
                      speed: { min: 1, max: 3 },
                  },
                  number: {
                      density: {
                          enable: true,
                          area: 800,
                      },
                      value: 200,
                  },
                  opacity: {
                      value: 0.5,
                      animation: {
                          enable: true,
                          speed: 1,
                          minimumValue: 0.1
                      }
                  },
                  size: {
                      value: { min: 1, max: 5 },
                      animation: {
                          enable: true,
                          speed: 2,
                          minimumValue: 0.1
                      }
                  },
                  shape: {
                      type: "circle",
                  },
              },
              detectRetina: true,
          }}
      />
  );
};

export default ParticlesBackground;
