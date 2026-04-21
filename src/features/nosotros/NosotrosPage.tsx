import { Suspense, lazy, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Header } from "../../components/layout/Header";
import { siteContent } from "../../lib/constants/site";

const PokeEnergyParticles = lazy(() =>
  import("../landing/components/PokeEnergyParticles").then((m) => ({ default: m.PokeEnergyParticles }))
);

const educationalPillars = [
  "Entrenamiento por niveles: principiante, intermedio y competitivo",
  "Lectura de meta, tipos, coberturas y toma de decisiones tácticas",
  "Talleres de armado de equipos y simulación de combates",
  "Mentoría personalizada para mejorar reflejos, estrategia y consistencia",
];

const champions = [
  { name: "Alonso Barrueta", title: "Campeón regional — Formato individual", image: "/hombre.png" },
  { name: "Maya Rios", title: "Top clasificatorio nacional — Liga académica", image: "/mujer.png" },
];

const panelOrder = ["enfoque", "egresados", "comunidad"] as const;
type PanelKey = (typeof panelOrder)[number];

type NosotrosPageProps = { pathname: string; onNavigate: (target: string) => void };

const panelVariants = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -32 },
};

export function NosotrosPage({ pathname, onNavigate }: NosotrosPageProps) {
  const [activePanel, setActivePanel] = useState<PanelKey>("enfoque");
  const shouldReduceMotion = useReducedMotion();

  const panelLabels: Record<PanelKey, string> = useMemo(
    () => ({ enfoque: "Nuestro enfoque", egresados: "Egresados", comunidad: "Comunidad" }),
    []
  );

  const transition = shouldReduceMotion ? { duration: 0 } : { duration: 0.3, ease: [0.2, 0.7, 0.2, 1] as const };

  return (
    <>
      <Header pathname={pathname} onNavigate={onNavigate} />

      <main className="nos-main">
        <section id="nosotros" className="nos-scene" aria-labelledby="nosotros-title">

          {/* Full-screen background */}
          <figure className="nos-bg" aria-hidden="true">
            <img src="/johtosch.png" alt="" loading="lazy" />
          </figure>
          <div className="nos-overlay" aria-hidden="true" />
          <Suspense fallback={null}>
            <PokeEnergyParticles />
          </Suspense>

          {/* Two-column layout */}
          <div className="nos-layout">

            {/* ── Left sidebar ── */}
            <motion.aside
              className="nos-sidebar"
              initial={shouldReduceMotion ? false : { opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={transition}
            >
              <p className="nos-eyebrow">Conoce Johto School</p>
              <h1 id="nosotros-title" className="nos-heading">Nosotros</h1>
              <p className="nos-mission">{siteContent.mission}</p>

              <nav className="nos-nav" aria-label="Secciones de nosotros">
                {panelOrder.map((key) => (
                  <button
                    key={key}
                    type="button"
                    aria-pressed={activePanel === key}
                    className={`nos-nav__btn${activePanel === key ? " is-active" : ""}`}
                    onClick={() => setActivePanel(key)}
                  >
                    <span className="nos-nav__icon" aria-hidden="true">
                      {key === "enfoque" ? "🎯" : key === "egresados" ? "🏆" : "🤝"}
                    </span>
                    {panelLabels[key]}
                  </button>
                ))}
              </nav>
            </motion.aside>

            {/* ── Right content panel ── */}
            <div className="nos-content" aria-live="polite">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePanel}
                  className="nos-panel"
                  variants={panelVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={transition}
                >
                  {activePanel === "enfoque" && (
                    <>
                      <h2 className="nos-panel__title">Nuestro enfoque pedagógico</h2>
                      <p className="nos-panel__intro">
                        Formamos jugadores con criterio. Cada nivel está diseñado para desarrollar habilidades
                        reales de análisis, estrategia y mejora continua.
                      </p>
                      <ul className="nos-pillars">
                        {educationalPillars.map((pillar, i) => (
                          <li key={pillar} className="nos-pillars__item">
                            <span className="nos-pillars__num">0{i + 1}</span>
                            <p>{pillar}</p>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {activePanel === "egresados" && (
                    <>
                      <h2 className="nos-panel__title">Egresados destacados</h2>
                      <p className="nos-panel__intro">
                        Nuestros alumnos han competido en torneos regionales y nacionales. Sus logros son
                        el reflejo de nuestro método.
                      </p>
                      <div className="nos-champions">
                        {champions.map((c) => (
                          <article key={c.name} className="nos-champion">
                            <div className="nos-champion__img-wrap">
                              <img src={c.image} alt={c.name} loading="lazy" />
                            </div>
                            <div className="nos-champion__body">
                              <h3>{c.name}</h3>
                              <p>{c.title}</p>
                            </div>
                          </article>
                        ))}
                      </div>
                    </>
                  )}

                  {activePanel === "comunidad" && (
                    <>
                      <h2 className="nos-panel__title">Nuestra comunidad</h2>
                      <p className="nos-panel__intro">
                        Más que una escuela: una comunidad de entrenadores que aprenden juntos, se desafían
                        y crecen en cada batalla.
                      </p>
                      <div className="nos-info-grid">
                        <article className="nos-info-card">
                          <h3>Cómo enseñamos</h3>
                          <p>
                            Clases guiadas, práctica en batallas, revisión de errores y planes de mejora
                            personalizados para cada entrenador.
                          </p>
                        </article>
                        <article className="nos-info-card">
                          <h3>Únete ahora</h3>
                          <p>
                            Contáctanos por WhatsApp al{" "}
                            <a href={siteContent.contact.whatsappUrl} target="_blank" rel="noreferrer">
                              {siteContent.contact.phone}
                            </a>{" "}
                            o escríbenos a{" "}
                            <a href={`mailto:${siteContent.contact.email}`}>{siteContent.contact.email}</a>.
                          </p>
                        </article>
                      </div>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </section>
      </main>
    </>
  );
}