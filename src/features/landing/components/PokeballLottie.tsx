import { motion, useReducedMotion } from "framer-motion";

type PokeballLottieProps = {
  onCelebrate: () => void;
};

export function PokeballLottie({ onCelebrate }: PokeballLottieProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <button type="button" className="hero__pokeball-lottie" onClick={onCelebrate} aria-label="Abrir premio especial">
      <div className="hero__pokeball-lottie-anim" aria-hidden="true">
        <motion.span
          className="hero__gift-emoji"
          initial={shouldReduceMotion ? false : { y: 0, rotate: -2 }}
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  y: [0, -7, 0],
                  rotate: [-3, 4, -3],
                  scale: [1, 1.06, 1]
                }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : {
                  duration: 1.7,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut"
                }
          }
        >
          🎁
        </motion.span>
      </div>
    </button>
  );
}
