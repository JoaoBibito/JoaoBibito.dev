'use client';

import { useEffect, useMemo, useState } from 'react';
import ParticlesLib, {initParticlesEngine} from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Engine, ISourceOptions } from '@tsparticles/engine';

export function Particles() {
  const [ready, setReady]=useState(false)
  useEffect(() => {
    initParticlesEngine(async(engine:Engine)=>{
      await loadSlim(engine)
    }).then(()=>setReady(true))
  },[])

  const options = useMemo<ISourceOptions>(()=>({
      background: {
        color: "#transparent",
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize:  { enable: true },
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
          value: 0.4,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 0.5, max: 3 },
        },
      },
      detectRetina: true,
  }),[])

  //   const init = async () => {
  //     await loadSlim(engine);

  //     await tsParticles.load({
  //       id: "tsparticles", // HTML container ID
  //       options: {
  //         background: {
  //           color: "#transparent",
  //         },
  //         fpsLimit: 120,
  //         interactivity: {
  //           events: {
  //             onHover: {
  //               enable: true,
  //               mode: "repulse",
  //             },
  //             resize: true,
  //           },
  //         },
  //         particles: {
  //           color: {
  //             value: "#ffffff",
  //           },
  //           links: {
  //             color: "#88A",
  //             distance: 150,
  //             enable: false,
  //             opacity: 0.5,
  //             width: 0.3,
  //           },
  //           collisions: {
  //             enable: true,
  //           },
  //           move: {
  //             direction: "none",
  //             enable: true,
  //             outModes: {
  //               default: "bounce",
  //             },
  //             random: false,
  //             speed: 0.6,
  //             straight: false,
  //           },
  //           number: {
  //             density: {
  //               enable: true,
  //             },
  //             value: 180,
  //           },
  //           opacity: {
  //             value: 0.4,
  //           },
  //           shape: {
  //             type: "circle",
  //           },
  //           size: {
  //             value: { min: 0.5, max: 3 },
  //           },
  //         },
  //         detectRetina: true,
  //       },
  //     });
  //   }
  //   init();
  // }, []);

  return <ParticlesLib id="tsParticles" options={options} style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }} />;
}