'use client';

import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { useEffect } from "react";

export function Particles() {
  useEffect(() => {
    const init = async () => {
      await loadSlim(tsParticles);

      await tsParticles.load({
        id: "tsparticles", // HTML container ID
        options: {
          background: {
            color: "#000000",
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#88A",
              distance: 150,
              enable: false,
              opacity: 0.5,
              width: 0.3,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 0.6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
              },
              value: 180,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 0.5, max: 3 },
            },
          },
          detectRetina: true,
        },
      });
    }
    init();
  }, []);

  return <div id="tsparticles" style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1 }} />;
}