import { useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type ScholarshipCelebrationModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const celebrationSprites = [
  { name: "bulbasaur", url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" },
  { name: "squirtle", url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" },
  { name: "gengar", url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png" },
  { name: "dragonite", url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png" },
  { name: "snorlax", url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png" },
  { name: "lapras", url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png" }
] as const;

const ribbons = ["\u2728", "\u2605", "\u2728", "\u2605", "\u2728", "\u2605", "\u2728", "\u2605"] as const;

export function ScholarshipCelebrationModal({ isOpen, onClose }: ScholarshipCelebrationModalProps) {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onEscape);

    return () => {
      window.removeEventListener("keydown", onEscape);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="celebration"
          role="dialog"
          aria-modal="true"
          aria-labelledby="celebration-title"
          onClick={onClose}
          initial={shouldReduceMotion ? undefined : { opacity: 0 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1 }}
          exit={shouldReduceMotion ? undefined : { opacity: 0 }}
        >
          <motion.div
            className="celebration__panel"
            onClick={(event) => event.stopPropagation()}
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 34, scale: 0.95 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, y: 20, scale: 0.98 }}
            transition={
              shouldReduceMotion ? undefined : { duration: 0.65, ease: [0.2, 0.7, 0.2, 1] as const }
            }
          >
            <div className="celebration__sparkle-layer" aria-hidden="true">
              {ribbons.map((icon, index) => (
                <motion.span
                  key={`${icon}-${index}`}
                  initial={shouldReduceMotion ? undefined : { opacity: 0, y: -12 }}
                  animate={shouldReduceMotion ? undefined : { opacity: [0.3, 1, 0.3], y: [0, 14, 0] }}
                  transition={{
                    duration: 2.8,
                    repeat: shouldReduceMotion ? 0 : Number.POSITIVE_INFINITY,
                    delay: index * 0.12
                  }}
                >
                  {icon}
                </motion.span>
              ))}
            </div>

            <p className="celebration__badge">Resultado de admision</p>
            <h3 id="celebration-title">Felicitaciones, has sido seleccionado para una media beca</h3>
            <p className="celebration__copy">
              Tu esfuerzo, disciplina y potencial estrategico te han convertido en ganador de esta oportunidad.
              Sigue entrenando tu talento: esta aventura apenas comienza.
            </p>

            <ul className="celebration__sprites" aria-label="Pokemon celebrando tu logro">
              {celebrationSprites.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={shouldReduceMotion ? undefined : { opacity: 0, y: 10 }}
                  animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={{ delay: shouldReduceMotion ? 0 : 0.25 + index * 0.08 }}
                >
                  <img src={item.url} alt={item.name} loading="lazy" />
                  <span>{item.name}</span>
                </motion.li>
              ))}
            </ul>

            <div className="celebration__actions">
              <button type="button" className="button button--primary" onClick={onClose}>
                Aceptar premio
              </button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
