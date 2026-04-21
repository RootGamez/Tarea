import { Suspense, lazy, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Header } from "../../components/layout/Header";
import { siteContent } from "../../lib/constants/site";

const PokeEnergyParticles = lazy(() =>
  import("../landing/components/PokeEnergyParticles").then((module) => ({ default: module.PokeEnergyParticles }))
);

const educationalPillars = [
  "Entrenamiento por niveles: principiante, intermedio y competitivo",
  "Lectura de meta, tipos, coberturas y toma de decisiones tácticas",
  "Talleres de armado de equipos y simulación de combates",
  "Mentoría personalizada para mejorar reflejos, estrategia y consistencia"
];

const champions = [
  {
    name: "Alonso Barrueta",
    title: "Campeón regional - Formato individual",
    image: "/hombre.png"
  },
  {
    name: "Maya Rios",
    title: "Top clasificatorio nacional - Liga academica",
    image: "/mujer.png"
  }
];

const floatingTags = ["Metagame real", "Combate tactico", "Juego limpio"] as const;

const panelOrder = ["enfoque", "egresados", "comunidad"] as const;

type PanelKey = typeof panelOrder[number];

type NosotrosPageProps = {
  pathname: string;
  onNavigate: (target: string) => void;
};

export function NosotrosPage({ pathname, onNavigate }: NosotrosPageProps) {
  const [visiblePanels, setVisiblePanels] = useState<Record<PanelKey, boolean>>({
    enfoque: false,
    egresados: false,
    comunidad: false
  });
  const shouldReduceMotion = useReducedMotion();

  const panelLabels = useMemo(
    () => ({
      enfoque: "Nuestro enfoque",
      egresados: "Egresados",
      comunidad: "Comunidad"
    }),
    []
  );

  return (
    <>
      <Header pathname={pathname} onNavigate={onNavigate} />

      <main className="nosotros-main">
        <section id="nosotros" className="hero nosotros-hero" aria-labelledby="nosotros-title">
          <div className="nosotros-hero__viewport">
            <Suspense fallback={null}>
              <PokeEnergyParticles />
            </Suspense>

            <figure className="nosotros-hero__media" aria-hidden="true">
              <img src="/johtosch.png" alt="" loading="lazy" />
            </figure>

            <div className="nosotros-hero__content">
              <p className="hero__eyebrow">Conoce Johto School</p>
              <h1 id="nosotros-title">Nosotros</h1>
              <p className="hero__tagline nosotros-hero__mission">{siteContent.mission}</p>
              <div className="hero__actions">
                <Button href={siteContent.contact.whatsappUrl} target="_blank" rel="noreferrer">
                  Hablar con admisiones
                </Button>
                <Button
                  href="/#servicios"
                  variant="secondary"
                  onClick={(event) => {
                    event.preventDefault();
                    onNavigate("/#servicios");
                  }}
                >
                  Ver servicios
                </Button>
              </div>

              <div className="nosotros-hero__panel-switch" role="group" aria-label="Mostrar u ocultar secciones de nosotros">
                {panelOrder.map((panelKey) => (
                  <button
                    key={panelKey}
                    id={`nosotros-tab-${panelKey}`}
                    type="button"
                    aria-pressed={visiblePanels[panelKey]}
                    aria-controls={`nosotros-panel-${panelKey}`}
                    className={`nosotros-hero__panel-button${visiblePanels[panelKey] ? " is-active" : ""}`}
                    onClick={() =>
                      setVisiblePanels((current) => ({
                        ...current,
                        [panelKey]: !current[panelKey]
                      }))
                    }
                  >
                    {panelLabels[panelKey]}
                  </button>
                ))}
              </div>

              <motion.aside
                id="nosotros-panel-enfoque"
                aria-labelledby="nosotros-tab-enfoque"
                className={`nosotros-hero__live-panel nosotros-panel nosotros-panel--enfoque${visiblePanels.enfoque ? " is-visible" : " is-hidden"}`}
                initial={false}
                animate={
                  shouldReduceMotion
                    ? undefined
                    : visiblePanels.enfoque
                      ? { opacity: 1, y: 0, scale: 1 }
                      : { opacity: 0, y: 10, scale: 0.98 }
                }
                transition={shouldReduceMotion ? undefined : { duration: 0.25 }}
              >
                <ul className="nosotros-pillars" aria-label="Pilares de nuestra propuesta educativa">
                  {educationalPillars.map((pillar, index) => (
                    <li key={pillar}>
                      <span className="nosotros-pillars__index">0{index + 1}</span>
                      <p>{pillar}</p>
                    </li>
                  ))}
                </ul>
              </motion.aside>

              <motion.aside
                id="nosotros-panel-egresados"
                aria-labelledby="nosotros-tab-egresados"
                className={`nosotros-hero__live-panel nosotros-panel nosotros-panel--egresados${visiblePanels.egresados ? " is-visible" : " is-hidden"}`}
                initial={false}
                animate={
                  shouldReduceMotion
                    ? undefined
                    : visiblePanels.egresados
                      ? { opacity: 1, y: 0, scale: 1 }
                      : { opacity: 0, y: 10, scale: 0.98 }
                }
                transition={shouldReduceMotion ? undefined : { duration: 0.25 }}
              >
                <div className="champions-grid" aria-label="Galeria de campeones egresados">
                  {champions.map((champion) => (
                    <article key={`${champion.name}-${champion.title}`} className="champion-card">
                      <img src={champion.image} alt={champion.name} loading="lazy" />
                      <div className="champion-card__body">
                        <h3>{champion.name}</h3>
                        <p>{champion.title}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </motion.aside>

              <motion.aside
                id="nosotros-panel-comunidad"
                aria-labelledby="nosotros-tab-comunidad"
                className={`nosotros-hero__live-panel nosotros-panel nosotros-panel--comunidad${visiblePanels.comunidad ? " is-visible" : " is-hidden"}`}
                initial={false}
                animate={
                  shouldReduceMotion
                    ? undefined
                    : visiblePanels.comunidad
                      ? { opacity: 1, y: 0, scale: 1 }
                      : { opacity: 0, y: 10, scale: 0.98 }
                }
                transition={shouldReduceMotion ? undefined : { duration: 0.25 }}
              >
                <div className="nosotros-info-grid" aria-label="Informacion institucional">
                  <article className="nosotros-info-card">
                    <h3>Como ensenamos</h3>
                    <p>
                      Nuestro equipo combina clases guiadas, practica en batallas, revision de errores y planes de
                      mejora para que cada persona aprenda a competir con criterio y confianza.
                    </p>
                  </article>
                  <article className="nosotros-info-card">
                    <h3>Contacto directo</h3>
                    <p>
                      Telefono: {siteContent.contact.phone}
                      <br />
                      Correo: {siteContent.contact.email}
                    </p>
                  </article>
                </div>
              </motion.aside>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}