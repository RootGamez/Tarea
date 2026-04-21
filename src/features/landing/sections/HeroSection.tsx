import { Container } from "../../../components/layout/Container";
import { Button } from "../../../components/ui/Button";
import { siteContent } from "../../../lib/constants/site";

export function HeroSection() {
  return (
    <section id="presentacion" className="hero" aria-labelledby="hero-title">
      <Container>
        <div className="hero__frame">
          <div className="hero__overlay" role="presentation" />

          <div className="hero__content">
            <p className="hero__eyebrow">Institucion educativa</p>
            <h1 id="hero-title">{siteContent.institutionName}</h1>
            <p className="hero__tagline">{siteContent.tagline}</p>

            <div className="hero__actions">
              <Button href="/nosotros">Conocenos</Button>
              <Button href="/servicios" variant="secondary">
                Ver servicios
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
