import { Button } from "../../components/ui/Button";
import battleImage from "./images/batle.png";

export function ServicesHero() {
  return (
    <section className="services-hero" aria-labelledby="services-hero-title">
      <div className="services-hero__media">
        <img
          src={battleImage}
          alt="Escena de entrenamiento y batalla Pokemon"
          className="services-hero__image"
        />
        <div className="services-hero__overlay" />
      </div>

      <div className="services-hero__content">
        <p className="services-hero__eyebrow">Conoce Johto School</p>
        <h1 id="services-hero-title" className="pokemon-title services-hero__title">
          Entrenamiento
        </h1>
        <p className="services-hero__text">
          Desarrolla estrategia, control y trabajo en equipo con un enfoque visual inspirado en el competitivo Pokemon.
        </p>
        <div className="services-hero__actions">
          <Button href="#servicios">Ver servicios</Button>
          <Button href="mailto:admision@jhotoschool.edu" variant="secondary">
            Hablar con admisiones
          </Button>
        </div>
      </div>
    </section>
  );
}