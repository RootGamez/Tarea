import { Section } from "../../../components/layout/Section";
import { Button } from "../../../components/ui/Button";
import { siteContent } from "../../../lib/constants/site";
import { motion, useReducedMotion } from "framer-motion";

export function CTASection() {
  const shouldReduceMotion = useReducedMotion();

  const pulseTransition = shouldReduceMotion
    ? undefined
    : { duration: 2.4, repeat: Infinity, ease: "easeInOut" as const };

  return (
    <Section
      id="contacto"
      title="Contacto"
      subtitle="Da el siguiente paso hoy: escribenos por WhatsApp y te guiamos en tu admision."
    >
      <motion.div
        className="contact-cta"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={shouldReduceMotion ? undefined : { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
      >
        <div className="contact-cta__grid" role="presentation">
          <motion.span
            className="contact-cta__orb"
            animate={shouldReduceMotion ? undefined : { y: [0, -8, 0], scale: [1, 1.08, 1] }}
            transition={pulseTransition}
          />
          <motion.span
            className="contact-cta__orb contact-cta__orb--accent"
            animate={shouldReduceMotion ? undefined : { y: [0, 9, 0], scale: [1, 0.9, 1] }}
            transition={
              shouldReduceMotion
                ? undefined
                : { duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }
            }
          />
        </div>

        <p className="contact-cta__label">Canal directo de admisiones</p>
        <h3>Hablemos por WhatsApp</h3>
        <p className="contact-cta__copy">
          Atencion rapida para resolver dudas de programas, horarios y proceso de matricula.
        </p>

        <div className="contact-cta__actions">
          <Button href={siteContent.contact.whatsappUrl} target="_blank" rel="noreferrer">
            Escribir al WhatsApp
          </Button>
        </div>
      </motion.div>
    </Section>
  );
}
