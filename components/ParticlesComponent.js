import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = ({ id, theme }) => {
  const [init, setInit] = useState(false);

  // Initialize tsparticles engine once
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  // Options switch based on theme
  const options = useMemo(() => {
    const isDark = theme === "dark";

    return {
      background: {
        color: { value: isDark ? "#1F2937" : "#E5E7EB" }, // dark blue vs white
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "repulse" },
          onHover: { enable: true, mode: "grab" },
        },
        modes: {
          push: { distance: 200, duration: 15 },
          grab: { distance: 150 },
        },
      },
      particles: {
        color: { value: isDark ? "#FFFFFF" : "#282828" }, // white vs black
        links: {
          color: isDark ? "#FFFFFF" : "#282828",
          distance: 50,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "out" },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: { enable: true },
          value: 300,
        },
        opacity: { value: .5},
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3} },
      },
      detectRetina: true,
    };
  }, [theme]); // recompute when theme changes

  return init ? (
    <Particles id={id} init={particlesLoaded} options={options} />
  ) : null;
};

export default ParticlesComponent; 
