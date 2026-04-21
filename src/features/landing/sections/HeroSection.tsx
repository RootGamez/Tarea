import { Container } from "../../../components/layout/Container";
import { Button } from "../../../components/ui/Button";
import { siteContent } from "../../../lib/constants/site";

export function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <Container>
        <p className="hero__eyebrow">Admisiones 2026 abiertas</p>
        <h1 id="hero-title">{siteContent.institutionName}</h1>
        <p className="hero__tagline">{siteContent.tagline}</p>
        <div className="hero__actions">
          <Button href="#programas">Ver programas</Button>
          <Button href="#contacto" variant="secondary">
            Solicitar informacion
          </Button>
        </div>
      </Container>
    </section>
  );
}
