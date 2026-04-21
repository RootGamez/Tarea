import { Container } from "../../../components/layout/Container";
import { Button } from "../../../components/ui/Button";
import { siteContent } from "../../../lib/constants/site";

export function HeroSection() {
  return (
    <section id="presentacion" className="hero" aria-labelledby="hero-title">
      <Container>
        <img src="/johto-icon.svg" alt="Johto School" className="hero__icon" />
        <p className="hero__eyebrow">Inscripciones abiertas para dominar el competitivo</p>
        <h1 id="hero-title">{siteContent.institutionName}</h1>
        <p className="hero__tagline">{siteContent.tagline}</p>
        <div className="hero__actions">
          <Button href="#programas">Ver niveles</Button>
          <Button href="#contacto" variant="secondary">
            Solicitar información
          </Button>
        </div>
      </Container>
    </section>
  );
}
