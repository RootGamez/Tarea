import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export function PokeEnergyParticles() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setIsReady(true);
    });
  }, []);

  const options = useMemo<ISourceOptions>(
    () => ({
      fullScreen: { enable: false },
      background: { color: "transparent" },
      fpsLimit: 60,
      detectRetina: true,
      particles: {
        number: {
          value: 28,
          density: { enable: true, area: 850 }
        },
        color: {
          value: ["#66e052", "#9f9bff", "#cfd7ff"]
        },
        opacity: {
          value: { min: 0.2, max: 0.55 },
          animation: {
            enable: true,
            speed: 0.7,
            minimumValue: 0.15
          }
        },
        size: {
          value: { min: 1.4, max: 4.4 }
        },
        move: {
          enable: true,
          speed: { min: 0.4, max: 1.6 },
          direction: "none",
          random: true,
          outModes: {
            default: "out"
          }
        },
        links: {
          enable: true,
          distance: 130,
          opacity: 0.16,
          color: "#9f9bff",
          width: 1
        }
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse"
          },
          resize: {
            enable: true
          }
        },
        modes: {
          repulse: {
            distance: 90,
            duration: 0.4
          }
        }
      }
    }),
    []
  );

  if (!isReady) {
    return null;
  }

  return <Particles id="hero-particles" className="hero__particles" options={options} />;
}
