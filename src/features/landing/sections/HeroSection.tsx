import { type MouseEvent, useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { Container } from "../../../components/layout/Container";
import { Button } from "../../../components/ui/Button";
import { siteContent } from "../../../lib/constants/site";

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const [mottoIndex, setMottoIndex] = useState(0);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const animeInspiredMottos = [
    "Cada desafio es una oportunidad para evolucionar.",
    "La verdadera fuerza nace de entrenar con disciplina.",
    "La amistad convierte cualquier batalla en aprendizaje.",
    "Un gran entrenador nunca deja de aprender.",
    "Con estrategia y coraje, todo objetivo se alcanza."
  ] as const;

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    const interval = window.setInterval(() => {
      setMottoIndex((current) => (current + 1) % animeInspiredMottos.length);
    }, 3400);

    return () => {
      window.clearInterval(interval);
    };
  }, [animeInspiredMottos.length, shouldReduceMotion]);

  const springConfig = { stiffness: 90, damping: 22, mass: 0.8 };
  const smoothX = useSpring(pointerX, springConfig);
  const smoothY = useSpring(pointerY, springConfig);

  const frameTransform = useMotionTemplate`translate3d(${smoothX}px, ${smoothY}px, 0)`;
  const contentTransform = useMotionTemplate`translate3d(calc(${smoothX}px * -0.5), calc(${smoothY}px * -0.5), 0)`;
  const tagsTransform = useMotionTemplate`translate3d(calc(${smoothX}px * -0.9), calc(${smoothY}px * -0.9), 0)`;

  const handlePointerMove = (event: MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = (event.clientX - centerX) / rect.width;
    const offsetY = (event.clientY - centerY) / rect.height;

    pointerX.set(offsetX * -16);
    pointerY.set(offsetY * -16);
  };

  const handlePointerLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

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
        <motion.div
          className="hero__frame"
          onMouseMove={handlePointerMove}
          onMouseLeave={handlePointerLeave}
          style={shouldReduceMotion ? undefined : { transform: frameTransform }}
        >
          <motion.div
            className="hero__intro-curtain"
            role="presentation"
            initial={shouldReduceMotion ? false : { opacity: 1, scaleY: 1 }}
            animate={shouldReduceMotion ? undefined : { opacity: 0, scaleY: 0 }}
            transition={shouldReduceMotion ? undefined : { duration: 1.1, delay: 0.08, ease: [0.2, 0.7, 0.2, 1] }}
          />
          <div className="hero__overlay" role="presentation" />
          <div className="hero__shimmer" role="presentation" />

          <motion.ul
            className="hero__floating-tags"
            aria-label="Aspectos destacados"
            style={shouldReduceMotion ? undefined : { transform: tagsTransform }}
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
            style={shouldReduceMotion ? undefined : { transform: contentTransform }}
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
              className="hero__motto"
              aria-live="polite"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ ...contentTransition, delay: shouldReduceMotion ? 0 : 0.58 }}
            >
              <span className="hero__motto-label">Lema del dia</span>
              <AnimatePresence mode="wait">
                <motion.p
                  key={mottoIndex}
                  className="hero__motto-text"
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 14, filter: "blur(3px)" }}
                  animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={shouldReduceMotion ? undefined : { opacity: 0, y: -10, filter: "blur(3px)" }}
                  transition={shouldReduceMotion ? undefined : { duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
                >
                  {animeInspiredMottos[mottoIndex]}
                </motion.p>
              </AnimatePresence>
            </motion.div>

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
        </motion.div>
      </Container>
    </section>
  );
}
