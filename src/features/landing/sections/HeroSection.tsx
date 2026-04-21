import { motion, useReducedMotion } from "framer-motion";
import { Container } from "../../../components/layout/Container";
import { Button } from "../../../components/ui/Button";
import { siteContent } from "../../../lib/constants/site";

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const titleWords = siteContent.institutionName.split(" ");

  const floatingTags = ["Excelencia academica", "Comunidad activa", "Vision global"] as const;

  const highlights = [
    { value: "15+", label: "Anios de trayectoria" },
    { value: "2.4k", label: "Estudiantes formados" },
    { value: "98%", label: "Satisfaccion institucional" }
  ] as const;

  const contentTransition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.8, ease: [0.2, 0.7, 0.2, 1] as const };

  return (
    <section id="presentacion" className="hero" aria-labelledby="hero-title">
      <Container>
        <div className="hero__frame">
          <div className="hero__overlay" role="presentation" />
          <div className="hero__shimmer" role="presentation" />

          <motion.ul
            className="hero__floating-tags"
            aria-label="Aspectos destacados"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ ...contentTransition, delay: shouldReduceMotion ? 0 : 0.25 }}
          >
            {floatingTags.map((tag, index) => (
              <motion.li
                key={tag}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ ...contentTransition, delay: shouldReduceMotion ? 0 : 0.35 + index * 0.12 }}
              >
                {tag}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            className="hero__content"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ ...contentTransition, delay: shouldReduceMotion ? 0 : 0.1 }}
          >
            <motion.p
              className="hero__eyebrow"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ ...contentTransition, delay: shouldReduceMotion ? 0 : 0.2 }}
            >
              Institucion educativa
            </motion.p>

            <h1 id="hero-title">
              {titleWords.map((word, index) => (
                <motion.span
                  key={`${word}-${index}`}
                  className="hero__title-word"
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 36, rotateX: -50 }}
                  animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ ...contentTransition, delay: shouldReduceMotion ? 0 : 0.28 + index * 0.12 }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              className="hero__tagline"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ ...contentTransition, delay: shouldReduceMotion ? 0 : 0.52 }}
            >
              {siteContent.tagline}
            </motion.p>

            <motion.div
              className="hero__actions"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ ...contentTransition, delay: shouldReduceMotion ? 0 : 0.62 }}
            >
              <Button href="/nosotros">Conocenos</Button>
              <Button href="/servicios" variant="secondary">
                Ver servicios
              </Button>
            </motion.div>

            <motion.ul
              className="hero__metrics"
              aria-label="Metricas institucionales"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ ...contentTransition, delay: shouldReduceMotion ? 0 : 0.72 }}
            >
              {highlights.map((item, index) => (
                <motion.li
                  key={item.label}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                  animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={{ ...contentTransition, delay: shouldReduceMotion ? 0 : 0.8 + index * 0.08 }}
                >
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
